import React from 'react';

import styles from './WobblyText.module.scss';

const WobblyText = ({ text }) => {
  return (
    <span className={styles.wobbly}>
      { text.split('').map((t,idx) => <span key={idx}>{ t }</span>) }
    </span>
  );
}

export default WobblyText;
