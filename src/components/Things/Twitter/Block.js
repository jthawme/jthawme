import React from 'react';

import Media from './Media';
import Text from './Text';

import styles from './Block.module.scss';

const Block = ({ className, ...content }) => {
  return (
    <div className={className}>
      <Media {...content}/>
      <div className={styles.text}>
        <Text {...content}/>
      </div>
    </div>
  );
}

export default Block;
