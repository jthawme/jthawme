import React from 'react';

// import classNames from 'classnames';

import styles from './Things.module.scss';

const Things = ({}) => {
  return (
    <>
      <main className={"fullscreen"}>
        <iframe className={styles.iframe} src="https://jt-sketches.netlify.com/009/" frameBorder="0"></iframe>
      </main>
    </>
  )
};

export default Things;
