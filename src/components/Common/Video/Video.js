import React from 'react';

const Video = ({ className, src }) => {
  return (
    <video
      className={className}
      controls
      loop
      muted
      src={src}/>
  );
};

export default Video;
