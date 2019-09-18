import React from 'react';

// import classNames from 'classnames';
import Title from '../Common/Title/Title';
import Row from '../Common/Row/Row';

// import styles from './Contact.module.scss';

const About = () => {
  return (
    <main className={"page"}>
      <Row
        title={<Title>Contact</Title>}>
        <>
          <p class="large">
            If you think you'd like to work with me I'd love to hear your idea. Or if you have anything else to say get in touch too, like music for instance, if you want to talk music lets talk music.
          </p>
          <p class="large">
            <a href="mailto:hi@jthaw.me">hi@jthaw.me</a><br/>
            <a href="https://twitter.com/jthawme" target="_blank" rel="noreferrer noopener">@jthawme</a>
          </p>
        </>
      </Row>
    </main>
  )
};

export default About;
