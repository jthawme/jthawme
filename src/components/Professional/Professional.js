import React from 'react';

import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';
import WorkList from '../Work/WorkList';

// import styles from './Professional.module.scss';

const totalYears = new Date().getFullYear() - 2010;

const Professional = ({}) => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>Introduction</Title>}>
        <p className="large">
          I have been a <span class="highlight">Web Developer</span> for <span className="little-dev-joke">(new Date().getFullYear() - 2010) =</span> <span class="highlight">{ totalYears } years</span> now and have worked on projects small and large, in studios small and large.
        </p>
        <p className="large">
          Primarily working as a <span class="highlight">front end developer</span> using <span class="highlight">Javascript</span> and specialising in <span class="highlight">React.js</span>, I also have non trivial experience in working with databases, server infrastructure, back end technologies and even further more creative outlets such as Physical Computing, Creating Coding and Graphic Design.
        </p>
      </Row>
      <Row
        title={<Title>Clients</Title>}>
        Hey big boy
      </Row>
    </main>
  )
};

export default Professional;
