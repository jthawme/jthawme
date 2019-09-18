import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';
import AboutContent from '../Common/AboutContent/AboutContent';
import FancyLink from '../Common/FancyLink/FancyLink';
import BigList from '../Common/BigList/BigList';
import BigListItem from '../Common/BigList/BigListItem';

// import styles from './Home.module.scss';
import img from '../../images/project.jpg';

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
      </Row>
    </main>
  )
};

export default Home;
