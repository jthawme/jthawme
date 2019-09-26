import React from 'react';

import classNames from 'classnames';

import HoverLink from '../HoverLink/HoverLink';

import styles from './BigList.module.scss';

const BigListItem = ({ className, to, label, text, image, vertical = false, children }) => {
  const cls = classNames(
    styles.item,
    {
      [styles.vertical]: vertical
    },
    {
      [styles.noLink]: !to
    },
    className
  );

  return (
    <li className={cls}>
      <HoverLink className={styles.desc} to={to} image={image}>
        <span className={styles.text}>{ text }</span>
        { label ? <span className={styles.label}>{ label }</span> : null }
        {
          children ? (
            <>
              { children }
            </>
          ) : null
        }
      </HoverLink>
    </li>
  );
};

export default BigListItem;
