import React from 'react';

import classNames from 'classnames';

import styles from './BigList.module.scss';

const BigList = ({ className, children }) => {
  const cls = classNames(
    styles.list,
    className
  );

  return <ul className={cls}>{ children }</ul>
};

export default BigList;
