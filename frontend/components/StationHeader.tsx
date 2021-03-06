import React from 'react';

import { Channel } from '../channels';

export const StationHeader: React.FC<{ channel: Channel }> = props => {
  return (
    <div className="media my-2">
      <img
        style={{ maxWidth: '140px' }}
        src={`/static/img/${props.channel.deeplink}-lg.png`}
        className="img-fluid rounded-lg bg-dark mr-3 p-1"
        alt="..."
      />
      <div className="media-body align-self-center">
        <h3 className="mt-0 mb-1">{props.channel.name}</h3>
        <small>{props.channel.desc}</small>
      </div>
    </div>
  );
};
