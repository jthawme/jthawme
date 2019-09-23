import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import styles from './Image.module.scss';

const loadImage = src => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
  })
}

const JTImage = ({ className, src, alt = "", width, height, bgColor = "#f5f5f5" }) => {
  const [showImage, setShowImage] = useState(false);
  const [setImage, setSetImage] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  if (inView) {
    loadImage(src)
      .then(() => {
        setSetImage(true);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setShowImage(true);
          })
        })
      })
  }

  const getPercentage = (_width, _height) => {
    if (!_width || !_height) {
      return 56.25;
    }

    return (_height / _width) * 100;
  };

  const cls = classNames(
    className,
    styles.image,
    {
      [styles.show]: showImage
    }
  );

  const style = {
    paddingBottom: `${getPercentage(width, height)}%`,
    backgroundColor: bgColor
  };

  return (
    <div ref={ref} className={cls} style={style}>
      { setImage ? (
        <img alt={alt} src={src}/>
      ) : null}
    </div>
  )
};

export default JTImage;
