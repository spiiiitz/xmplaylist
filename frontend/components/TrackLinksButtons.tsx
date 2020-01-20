/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ReactGA from 'react-ga';

const siteConversion: Record<string, string> = {
  tidal: 'Tidal',
  spotify: 'Spotify',
  soundCloud: 'SoundCloud',
  itunes: 'Apple Music',
  itunesStore: 'iTunes',
  googleplay: 'Google Play',
  deezer: 'Deezer',
  napster: 'Napster',
  youtube: 'YouTube',
  pandora: 'Pandora',
  soundcloud: 'SoundCloud',
  amazon: 'Amazon',
  amazonMusic: 'Amazon Music',
  youtubeMusic: 'YouTube Music',
  googleplayStore: 'Google Play Store',
};

export const TrackLinksButtons: React.FC<{
  links: Array<{ site: string; url: string }>;
  id: string;
}> = props => {
  const spotifyLink = props.links.find(link => link.site === 'spotify');
  const appleLink = props.links.find(link => link.site === 'itunes');

  const links = props.links.filter(link => !['spotify', 'itunes'].includes(link.site));

  const trackOut = (site: string, id: string): void => {
    ReactGA.event({
      category: 'MusicClick',
      action: site,
      label: id,
    });
  };

  if (appleLink) {
    links.unshift(appleLink);
  }

  if (spotifyLink) {
    links.unshift(spotifyLink);
  }

  return (
    <>
      {links.map(link => (
        <a
          key={link.site}
          href={link.url}
          className="btn btn-block border rounded-pill"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOut(link.site, props.id)}
        >
          {siteConversion[link.site] || link.site}
        </a>
      ))}
    </>
  );
};
