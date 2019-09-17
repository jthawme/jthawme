import React from 'react';

import Media from './Media';
import Text from './Text';

const Block = ({ className, ...content }) => {
  return (
    <div className={className}>
      <Media {...content}/>
      <Text {...content}/>
    </div>
  );
}

export default Block;
