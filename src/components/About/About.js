import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import AboutContent from '../Common/AboutContent/AboutContent';
import Row from '../Common/Row/Row';
import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

import styles from './About.module.scss';

const About = ({}) => {
  return (
    <main className={styles.page}>
      <Row
        title={<Title>About</Title>}>
        <AboutContent/>
      </Row>
    </main>
  )
};

export default About;
