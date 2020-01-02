/* eslint-disable @typescript-eslint/camelcase */
import { subDays, differenceInDays } from 'date-fns';
import * as _ from 'lodash';

import { Channel } from '../frontend/channels';
import { db } from './db';
import { StationRecent, StationNewest, TrackPlay } from '../frontend/responses';
import { ScrobbleModel } from '../frontend/models';

export async function getNewest(channel: Channel): Promise<StationNewest[]> {
  const thirtyDaysAgo = subDays(new Date(), 30);
  const newest = await db('scrobble')
    .select()
    .where('channel', channel.deeplink)
    .andWhere('track.createdAt', '>', thirtyDaysAgo)
    .leftJoin('track', 'scrobble.trackId', 'track.id')
    .leftJoin('spotify', 'scrobble.trackId', 'spotify.trackId')
    .leftJoin('links', 'scrobble.trackId', 'links.trackId')
    .orderBy('track.createdAt', 'desc');

  const groupedById = _.groupBy(newest, _.property('id'));

  return Object.values(groupedById).map(dataArr => {
    const data = dataArr[0];
    const spotify: StationNewest['spotify'] = {
      spotify_id: data.spotifyId,
      preview_url: data.previewUrl,
      cover: data.cover,
    };
    const track: StationNewest['track'] = { id: data.id, name: data.name, artists: data.artists };
    return {
      spotify,
      track,
      start_time: data.startTime,
      links: data.links,
      plays: groupedById[data.id].length,
    };
  });
}

export async function getMostHeard(channel: Channel): Promise<StationNewest[]> {
  const thirtyDaysAgo = subDays(new Date(), 30);
  const newest = await db('scrobble')
    .select()
    .where('channel', channel.deeplink)
    .andWhere('scrobble.startTime', '>', thirtyDaysAgo)
    .leftJoin('track', 'scrobble.trackId', 'track.id')
    .leftJoin('spotify', 'scrobble.trackId', 'spotify.trackId')
    .leftJoin('links', 'scrobble.trackId', 'links.trackId');

  const groupedById = _.groupBy(newest, _.property('id'));

  const result = Object.values(groupedById).map(dataArr => {
    const data = dataArr[0];
    const spotify: StationNewest['spotify'] = {
      spotify_id: data.spotifyId,
      preview_url: data.previewUrl,
      cover: data.cover,
    };
    const track: StationNewest['track'] = { id: data.id, name: data.name, artists: data.artists };
    return {
      spotify,
      track,
      start_time: data.startTime,
      links: data.links,
      plays: groupedById[data.id].length,
    };
  });
  return _.orderBy(result, _.property('plays'), 'desc');
}

export async function getRecent(channel: Channel, last?: Date): Promise<StationRecent[]> {
  const query = db('scrobble')
    .select()
    .where('channel', channel.deeplink)
    .leftJoin('track', 'scrobble.trackId', 'track.id')
    .leftJoin('spotify', 'scrobble.trackId', 'spotify.trackId')
    .leftJoin('links', 'scrobble.trackId', 'links.trackId')
    .orderBy('scrobble.startTime', 'desc')
    .limit(24);

  if (last) {
    query.andWhere('startTime', '<', last);
  }

  const raw = await query;

  return raw.map(data => {
    const spotify: StationRecent['spotify'] = {
      spotify_id: data.spotifyId,
      preview_url: data.previewUrl,
      cover: data.cover,
    };
    const track: StationRecent['track'] = { id: data.id, name: data.name, artists: data.artists };
    return { spotify, track, start_time: data.startTime, links: data.links };
  });
}

export async function getPlays(trackId: string, channel: Channel): Promise<TrackPlay[]> {
  const thirtyDaysAgo = subDays(new Date(), 30);
  const raw = await db<ScrobbleModel>('scrobble')
    .select()
    .from('scrobble')
    .where('trackId', trackId)
    .andWhere('channel', channel.deeplink)
    .andWhere('startTime', '>', thirtyDaysAgo);

  const result: Record<string, TrackPlay> = {};
  _.range(0, 30).forEach(x => {
    result[x.toString()] = { x: differenceInDays(new Date(), subDays(new Date(), x)).toString() + ' days ago', y: 0 };
  });
  for (const data of raw) {
    const daysAgo = differenceInDays(new Date(), data.startTime).toString();
    result[daysAgo].y += 1;
  }

  return Object.values(result).reverse();
}
