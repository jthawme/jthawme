import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';
import FancyLink from '../Common/FancyLink/FancyLink';
import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

import styles from './Work.module.scss';

const Work = ({}) => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>Work</Title>}>
        <BigList>
          <BigListItem
            to={"/work"}
            text="Play"
            label="Installation"/>
          <BigListItem
            to={"/work"}
            text="Drum Generates"
            label="Generative Posters"/>
        </BigList>
      </Row>
      <Row
        title={<Title>Experiments</Title>}>
        <BigList>
          <BigListItem
            to={"/work"}
            text="Play"
            label="Installation"/>
          <BigListItem
            to={"/work"}
            text="Drum Generates"
            label="Generative Posters"/>
        </BigList>
      </Row>
    </main>
  )
};

export default Work;
