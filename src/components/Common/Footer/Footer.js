import React from 'react';

import classNames from 'classnames';

import styles from './Footer.module.scss';

const Footer = ({ className }) => {
  const cls = classNames(
    styles.footer,
    className
  );

  return (
    <footer className={cls}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.title}>About site</span>
          <p>This site is built using GatsbyJS. The logo is generated upon every visit. The site is set in GT Walsheim.</p>
        </div>
        <div className={styles.right}>
          <span className={styles.title}>Get in touch</span>
          <a href="mailto:hi@jthaw.me">hi@jthaw.me</a><br/>
          <a href="https://linkedin.com/in/jonny-thaw" target="_blank" rel="noreferrer noopener">LinkedIn</a><br/>
          <a href="https://twitter.com/jthawme" target="_blank" rel="noreferrer noopener">@jthawme</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
