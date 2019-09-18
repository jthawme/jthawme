import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BgImage.module.scss';

const BgImage = ({ className }) => {
  const image = useSelector(store => store.backgroundImage);

  if (!image) {
    return null;
  }

  return <div className={[className, styles.wrapper].join(' ')}><img alt="" src={image}/></div>
};

export default BgImage;
