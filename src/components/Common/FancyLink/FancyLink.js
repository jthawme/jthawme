import React from 'react';

import { Link } from 'gatsby';

import styles from './FancyLink.module.scss';

const FancyLink = ({ to, className, children }) => {
  return <Link to={to} className={`${className} ${styles.link}`}>{ children }</Link>;
}

export default FancyLink;
