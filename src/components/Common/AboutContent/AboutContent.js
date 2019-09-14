import React from 'react';

import { Link } from 'gatsby';

import styles from './AboutContent.module.scss';

const AboutContent = ({ small = false }) => {
  return (
    <>
      <p className={styles.paragraph}>
        <Link to="/about">[I am]</Link> a full stack developer living in London, but born and raised in the lovely town of Shrewsbury. I am currently looking for contracts across creative coding, web development or installation projects.
      </p>
      {
        small ? null : (
          <>
            <p className={styles.paragraph}>
              I like making things that people will use, or that make people happy or have fun with. I don't do it as much as I would like to though. I like making things "just 'cos".
            </p>
            <p className={styles.paragraph}>
              Besides work, I love music, at the moment I am listening to I [HMM]. I also love travelling, for memories like [this], although I haven't done it as much as I'd want.
            </p>
            <p className={styles.paragraph}>
              This next line used to say 'Make believe chef, aspiring marathon runner and lover/hater of the internet.' and I am none of those things now. Its weird how time changes all the time.
            </p>
            <p className={styles.paragraph}>
              If you want to see a more professional overview, please check out <Link to="/professional">this link</Link>.
            </p>
          </>
        )
      }
    </>
  )
};

export default AboutContent;
