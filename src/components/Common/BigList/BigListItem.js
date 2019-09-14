import React from 'react';

import { Link } from 'gatsby';
import classNames from 'classnames';

import styles from './BigList.module.scss';

const BigListItem = ({ className, to, label, text }) => {
  const cls = classNames(
    styles.item,
    className
  );

  return (
    <li className={cls}>
      <Link to={to}>
        <span className={styles.text}>{ text }</span>
        <span className={styles.label}>{ label }</span>
      </Link>
    </li>
  );
};

export default BigListItem;
