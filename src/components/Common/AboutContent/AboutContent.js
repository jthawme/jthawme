import React, { useState, useEffect } from 'react';

import { Link } from 'gatsby';

import styles from './AboutContent.module.scss';

//?

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
    return <span>Something Cool</span>;
  }

  const { album, image: images, name, url } = track;
  // const image = images.pop();

  return <span>{ album['#text'] } – { name }</span>
};

const AboutContent = ({ small = false }) => {
  return (
    <>
      <p className={styles.paragraph}>
        <Link to="/about">[I am]</Link> a full stack developer living in London, but born and raised in the lovely town of Shrewsbury. I am currently looking for contracts across creative coding, web development or installation projects.
      </p>
      {
        small ? null : (
          <>
            <p className={styles.paragraph}>
              I like making things that people will use, or that make people happy or have fun with. I don't do it as much as I would like to though. I like making things "just 'cos".
            </p>
            <p className={styles.paragraph}>
              Besides work, I love music, at the moment I am listening to <AudioTrack/>. I also love travelling, for memories like [this], although I haven't done it as much as I'd want.
            </p>
            <p className={styles.paragraph}>
              This next line used to say 'Make believe chef, aspiring marathon runner and lover/hater of the internet.' and I am none of those things now. Its weird how time changes all the time.
            </p>
            <p className={styles.paragraph}>
              If you want to see a more professional overview, please check out <Link to="/professional">this link</Link>.
            </p>
          </>
        )
      }
    </>
  )
};

export default AboutContent;
