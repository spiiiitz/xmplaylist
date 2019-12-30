/* eslint-disable no-await-in-loop */
import _ from 'lodash';
import debug from 'debug';
import got from 'got';
import { URLSearchParams } from 'url';

import config from '../config';
import { channels } from '../frontend/channels';
import { popular } from './plays';
import { client, getCache } from './redis';
import * as Util from './util';
import { search } from './youtube';
import { TrackModel } from '../frontend/models';
import { db } from './db';

const log = debug('xmplaylist');

const blacklist = [
  'karaoke',
  'tribute',
  'demonstration',
  'performance',
  'instrumental',
  'famous',
  'originally',
  'arrangement',
  'cover',
  'style',
  'acoustic',
];

export interface SpotifyParsed {
  cover: string;
  spotifyId: string;
  spotifyName: string;
  durationMs: number;
  url: string;
  previewUrl: string | null;
}
export function parseSpotify(obj: any): SpotifyParsed {
  const cover = obj?.album?.images?.[0] ?? {};
  console.log(obj);
  return {
    cover: cover.url,
    spotifyId: obj.id,
    spotifyName: obj.name,
    durationMs: obj.duration_ms,
    url: obj.external_urls.spotify,
    previewUrl: obj.preview_url,
  };
}

export function optionalBlacklist(track: string, artists: string) {
  const all = track.toLowerCase() + artists.toLowerCase();
  return blacklist
    .map(b => {
      if (!all.includes(b)) {
        return ` NOT ${b}`;
      }

      return '';
    })
    .join('');
}

export async function getToken(): Promise<string> {
  const cache = await getCache('spotifytoken:cache');
  if (cache) {
    return cache;
  }

  const auth = Buffer.from(`${config.spotifyClientId}:${config.spotifyClientSecret}`).toString('base64');
  const res = await got
    .post('https://accounts.spotify.com/api/token', {
      headers: { Authorization: `Basic ${auth}` },
      // eslint-disable-next-line @typescript-eslint/camelcase
      form: { grant_type: 'client_credentials' },
    })
    .json<any>();
  client.setex('spotifytoken:cache', res.expires_in - 100, res.access_token);
  return res.access_token;
}

export async function searchTrack(artists: string[], name: string): Promise<SpotifyParsed> {
  const cleanArtists = Util.cleanupExtra(Util.cleanCutoff(artists.join(' ')));
  const cleanTrack = Util.cleanupExtra(
    Util.cleanRemix(Util.cleanFt(Util.cleanClean(Util.cleanCutoff(Util.cleanYear(name))))),
  );
  // Console.log('CLEAN: ', cleanTrack, cleanArtists);
  const token = await getToken();
  const headers = { Authorization: `Bearer ${token}` };
  // Console.log('ORIGINAL:', options.qs.q);
  const searchParams = new URLSearchParams({
    q: `${cleanTrack} ${cleanArtists} ${optionalBlacklist(cleanTrack, cleanArtists)}`,
    type: 'track',
    limit: '1',
  });
  const url = 'https://api.spotify.com/v1/search';
  const res = (await got
    .get(url, {
      searchParams,
      headers,
    })
    .json()) as any;
  if (res.tracks.items.length > 0) {
    return parseSpotify(_.first(res.tracks.items));
  }

  const youtube = await search(`${cleanTrack} ${cleanArtists}`);
  if (!youtube) {
    throw new Error('Youtube failed');
  }

  searchParams.set(
    'q',
    Util.cleanupExtra(Util.cleanRemix(Util.cleanFt(Util.cleanMusicVideo(youtube)))) +
      optionalBlacklist(youtube, youtube),
  );
  // Console.log('GOOGLE:', options.qs.q);
  const res2 = (await got.get(url, { searchParams, headers }).json()) as any;
  if (res2.tracks.items.length > 0) {
    return parseSpotify(_.first(res2.tracks.items));
  }

  throw new Error('Everything Failed');
}

export async function matchSpotify(track: TrackModel, update = false): Promise<any> {
  const s = await searchTrack(
    JSON.parse(track.artists).map(n => n.name),
    track.name,
  );

  if (!s || !s.spotifyName) {
    throw new Error('Failed');
  }

  log({ spotify: s });

  if (update) {
    return db('spotify').update({
      cover: s.cover,
      spotifyId: s.spotifyId,
      name: s.spotifyName,
      previewUrl: s.previewUrl,
    }).where('id', track.id);
  }

  return db('spotify').insert({
    id: track.id,
    cover: s.cover,
    spotifyId: s.spotifyId,
    name: s.spotifyName,
    previewUrl: s.previewUrl,
  });
}

export async function spotifyFindAndCache(track: TrackModel): Promise<any> {
  const doc = await db('spotify').select().where({ id: track.id }).first();
  if (doc) {
    return doc;
  }

  return matchSpotify(track);
}

export async function getUserToken(code: string): Promise<string> {
  const cache = await getCache('spotifyusertoken:cache');
  if (cache) {
    return cache;
  }

  const auth = Buffer.from(`${config.spotifyClientId}:${config.spotifyClientSecret}`).toString('base64');
  const res = await got
    .post('https://accounts.spotify.com/api/token', {
      headers: { Authorization: `Basic ${auth}` },
      form: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        redirect_uri: 'https://example.com/',
        // eslint-disable-next-line @typescript-eslint/camelcase
        grant_type: 'authorization_code',
        code,
        state: 'xmplaylist',
      },
    })
    .json<any>();
  client.setex('spotifyusertoken:cache', res.expires_in - 100, res.access_token);
  return res.access_token;
}

export async function addToPlaylist(code: string, playlistId: string, trackIds: string[]) {
  const token = await getUserToken(code);
  const url = `https://api.spotify.com/v1/users/xmplaylist/playlists/${playlistId}/tracks`;
  const chunks = _.chunk(trackIds, 100);
  for (const chunk of chunks) {
    await got.post(url, {
      headers: { Authorization: `Bearer ${token}` },
      json: {
        uris: chunk,
      },
    });
  }
}

export async function removeFromPlaylist(code: string, playlistId: string, trackIds: string[]) {
  const token = await getUserToken(code);
  const url = `https://api.spotify.com/v1/users/xmplaylist/playlists/${playlistId}/tracks`;
  const chunks = _.chunk(trackIds, 100);
  for (const chunk of chunks) {
    await got.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
      json: {
        tracks: chunk.map(n => {
          return { uri: n };
        }),
      },
    });
  }
}

export async function playlistTracks(code: string, playlistId: string) {
  const token = await getUserToken(code);
  const headers = { Authorization: `Bearer ${token}` };
  let res = await got
    .get(`https://api.spotify.com/v1/users/xmplaylist/playlists/${playlistId}/tracks`, {
      headers,
    })
    .json<any>();
  const items: string[] = [];
  res.items.forEach(n => items.push(n.track.uri));
  while (res.next) {
    res = await got.get(res.next, { headers }).json<any>();
    res.items.forEach(n => items.push(n.track.uri));
  }

  return items;
}

export async function updatePlaylists(code: string) {
  for (const chan of channels) {
    let trackIds = await popular(chan, 1000).then(t =>
      t.map(n => {
        if (!n.spotify) {
          // eslint-disable-next-line array-callback-return
          return;
        }

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `spotify:track:${n.spotify.spotifyId}`;
      }),
    );
    trackIds = _.uniq(_.compact(trackIds));
    const current = await playlistTracks(code, chan.playlist).catch(e => {
      console.error('GET TRACKS?', e);
      return [];
    });
    const toRemove = _.difference(current, trackIds);
    await removeFromPlaylist(code, chan.playlist, toRemove).catch(e => console.error('REMOVE', e));
    const toAdd = _.pullAll(trackIds, current);
    await addToPlaylist(code, chan.playlist, toAdd).catch(e => console.error('ADD ERROR', e));
  }
}
