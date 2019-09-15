import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import AboutContent from '../Common/AboutContent/AboutContent';
import Row from '../Common/Row/Row';

// import styles from './About.module.scss';

const About = ({}) => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>About</Title>}>
        <AboutContent/>
      </Row>
    </main>
  )
};

export default About;
