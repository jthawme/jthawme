import React, { useMemo } from 'react';

import styles from './Things.module.scss';

import Block from './Twitter/Block';

const ThingsColumns = ({ columns, data }) => {
  const columnEls = useMemo(() => {
    const renderItem = ({ content_id, content }, show = true) => {
      if (!show) {
        return null;
      }

      return (
        <Block
          className={styles.item}
          key={content_id}
          {...content}/>
      )
    }

    const displayColumns = (_columns, _data) => {
      const cols = [];

      for (let i = 0; i < _columns; i++) {
        cols.push(_data.map((d,idx) => {
          return renderItem(d, idx % columns === i)
        }));
      }

      return cols.map((list, i) => {
        return <div key={ i } className={styles.poolColumn}>{ list }</div>
      })
    }

    return displayColumns(columns, data);
  }, [data, columns,]);

  return (
    <section className={styles.pool}>
      { columnEls }
    </section>
  );
};

export default ThingsColumns;
