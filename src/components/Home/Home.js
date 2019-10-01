import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';
import AboutContent from '../Common/AboutContent/AboutContent';
import FancyLink from '../Common/FancyLink/FancyLink';
import WorkList from '../Work/WorkList';

// import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>Introduction</Title>}
        footer={<FancyLink to="/about">Read More</FancyLink>}>
        <AboutContent small/>
      </Row>
      <Row
        title={<Title>Work</Title>}
        footer={<FancyLink to="/work">View all</FancyLink>}>
        <WorkList
          category="work"
          limit={5}/>
      </Row>
    </main>
  )
};

export default Home;
