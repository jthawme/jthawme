import React from 'react';

import classNames from 'classnames';

import styles from './Row.module.scss';

const Row = ({ className, title, children, footer, noMargin = false }) => {
  const cls = classNames(
    styles.row,
    {
      [styles.noMargin]: noMargin
    },
    className
  );

  return (
    <section className={cls}>
      { title }
      { children }
      { footer ? (
        <div className={styles.footer}>{ footer }</div>
      ) : null }
    </section>
  )
}

export default Row;
