import React from 'react';

import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

import img from '../../images/project.jpg';

const WorkList = ({}) => {
  return (
    <BigList>
      <BigListItem
        to={"/project"}
        image={img}
        text="Play"
        label="Installation"/>
      <BigListItem
        to={"/project"}
        image={img}
        text="Drum Generates"
        label="Generative Posters"/>
    </BigList>
  )
}

export default WorkList;
