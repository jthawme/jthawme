import React from 'react';

import JTImage from '../../Common/Image/Image';
import styles from './Media.module.scss';

const MediaItem = (props) => {
  const { type, video_info, media_url_https, sizes } = props;
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
          <video controls loop muted src={getVideoUrl(video_info.variants)}/>
        </div>
      );
    case 'photo':
      return (
        <div className={styles.item}>
          <JTImage
            alt=""
            src={media_url_https}
            width={sizes.large.w}
            height={sizes.large.h}/>
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
