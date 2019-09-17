import React from 'react';

import styles from './Media.module.scss';

const MediaItem = (props) => {
  const { className, type, video_info, media_url_https } = props;
  const getVideoUrl = (variants) => {
    const _arr = variants.reverse();

    const obj = _arr.find(v => v.content_type === 'video/mp4');

    return obj.url;
  }

  switch (type) {
    case 'animated_gif':
    case 'video':
      return (
        <div className={styles.item}>
          <video controls loop autoPlay muted src={getVideoUrl(video_info.variants)}/>
        </div>
      );
    case 'photo':
      return (
        <div className={styles.item}>
          <img src={media_url_https}/>
        </div>
      );
    default:
      return null;
  }
};

const Media = ({ extended_entities }) => {
  if (extended_entities && extended_entities.media) {
    return (
      <div className={`${styles.group} ${ styles[`size${extended_entities.media.length}`] }`}>
        { extended_entities.media.map(ent => <MediaItem key={ent.id} {...ent}/>) }
      </div>
    );
  }

  return null;
}

export default Media;
