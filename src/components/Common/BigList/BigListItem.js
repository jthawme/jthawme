import React from 'react';

import classNames from 'classnames';

import HoverLink from '../HoverLink/HoverLink';

import styles from './BigList.module.scss';

const BigListItem = ({ className, to, label, text, image }) => {
  const cls = classNames(
    styles.item,
    className
  );

  return (
    <li className={cls}>
      <HoverLink to={to} image={image}>
        <span className={styles.text}>{ text }</span>
        <span className={styles.label}>{ label }</span>
      </HoverLink>
    </li>
  );
};

export default BigListItem;
