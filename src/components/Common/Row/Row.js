import React from 'react';

import classNames from 'classnames';

import styles from './Row.module.scss';

const Row = ({ className, title, children, footer }) => {
  const cls = classNames(
    styles.row,
    className
  );

  return (
    <section className={cls}>
      { title }
      { children }
      <div className={styles.footer}>{ footer }</div>
    </section>
  )
}

export default Row;
