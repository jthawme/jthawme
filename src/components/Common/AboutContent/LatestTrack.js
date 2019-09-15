import React, { useState, useEffect } from 'react';

import HoverLink from '../HoverLink/HoverLink';

const LAST_FM_BASE = 'http://ws.audioscrobbler.com/2.0/';
const LAST_FM_KEY = 'fc9a1cb8bc3ba37735ff3941152cb985';

const getUrl = (url, params) => {
  const _url = new URL(url);

  Object.keys(params).forEach(key => _url.searchParams.append(key, params[key]))

  return _url;
}

const AudioTrack = () => {
  const [track, setTrack] = useState(false);

  // Fetch last fm latest track
  useEffect(() => {
    const url = getUrl(LAST_FM_BASE, {
      method: 'user.getrecenttracks',
      user: 'jawknee4',
      api_key: LAST_FM_KEY,
      format: 'json',
      limit: 1
    });

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTrack(data.recenttracks.track[0]);
      });
  }, []);

  if (!track) {
    return (
      <a href="https://www.last.fm/user/jawknee4" href={url} target="_blank" rel="noreferrer noopener">
        Something Cool
      </a>
    );
  }

  const { artist, image: images, name, url } = track;
  const image = images.pop();

  return (
    <HoverLink to="https://www.last.fm/user/jawknee4" image={image['#text']}>
      { name } — { artist['#text'] }
    </HoverLink>
  );
};

export default AudioTrack;
