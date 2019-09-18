import React from 'react';

import classNames from 'classnames';

import styles from './Things.module.scss';
import Block from './Twitter/Block';

const Attribution = ({ text, onShuffle, fullscreen }) => {
  const cls = classNames(
    styles.attribution,
    {
      [styles.attributionFullscreen]: fullscreen
    }
  );

  return (
    <div className={cls}>
      <div className={styles.attributionText}>
        { text }
      </div>
      <div className={styles.attributionAction}>
        <button onClick={onShuffle}>Click for new thing</button>
      </div>
    </div>
  );
}

const THINGS = [
  {
    source: 'iframe',
    src: 'https://jt-sketches.netlify.com/009/',
    label: 'Daily Sketch #009'
  },
  {
    source: 'iframe',
    src: 'https://jt-sketches.netlify.com/015/',
    label: 'Daily Sketch #015'
  },
  {
    source: 'iframe',
    src: 'https://jt-sketches.netlify.com/021/',
    label: 'Daily Sketch #021'
  }
];

class Things extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: true,
      show: false,
      animate: false,
      info: this.randomThing(THINGS),
      data: []
    };

    this.mainRef = React.createRef();
  }

  componentDidMount() {
    fetch('https://things.jthaw.me/api')
      .then(resp => resp.json())
      .then(data => this.setState({ data }));

    this.timer = setTimeout(() => {
      this.setState({
        animate: true
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.setState({
            show: true
          });
        });
      });
    }, 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  randomThing = (things) => {
    return things[Math.floor(Math.random() * things.length)];
  }

  onShuffle = () => {
    const onTransitionEnd = () => {
      this.setState({
        info: this.randomThing(THINGS)
      }, () => {
        this.timer = setTimeout(() => {
          this.setState({
            show: true
          });
        }, 500);
      });

      this.mainRef.current.removeEventListener('transitionend', onTransitionEnd);
    };

    this.mainRef.current.addEventListener('transitionend', onTransitionEnd);

    this.setState({
      show: false
    });
  }

  renderItem(data, show = true) {
    if (!show) {
      return null;
    }

    return (
      <Block
        className={styles.item}
        key={data.content_id}
        {...data.content}/>
    )
  }

  displayColumns(data) {
    let columns = 1;

    if (window.matchMedia('(min-width: 500px').matches) {
      columns = 2;
    }

    if (window.matchMedia('(min-width: 768px').matches) {
      columns = 3;
    }

    const cols = [];

    for (let i = 0; i < columns; i++) {
      cols.push(data.map((d,idx) => {
        return this.renderItem(d, idx % columns === i)
      }));
    }

    return cols.map((list, i) => {
      return <div key={ i } className={styles.poolColumn}>{list}</div>
    })
  }

  render() {
    const { animate, show, info, data } = this.state;

    const cls = classNames(
      styles.things,
      "fullscreen",
      {
        [styles.animate]: animate
      },
      {
        [styles.show]: show
      }
    );

    return (
      <div className={`${styles.wrapper} collapse`}>
        <main className={cls} ref={this.mainRef}>
          <iframe title={info.label} className={styles.iframe} src={info.src} frameBorder="0"></iframe>

          <Attribution
            fullscreen
            text={info.label}
            onShuffle={this.onShuffle}/>
        </main>
        <section className={styles.pool}>
          { this.displayColumns(data) }
        </section>
      </div>
    )
  }
}

export default Things;
