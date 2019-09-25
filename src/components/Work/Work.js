import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';
import WorkList from '../Work/WorkList';

// import styles from './Work.module.scss';

const Work = () => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>Work</Title>}>
        <WorkList category="work"/>
      </Row>
      <Row
        title={<Title>Experiments</Title>}>
        <WorkList category="experiment"/>
      </Row>
    </main>
  )
};

export default Work;
