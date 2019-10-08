import React from 'react';

import classNames from 'classnames';

import ThingsColumns from './ThingsColumns';

import styles from './Things.module.scss';

const getColumns = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  let columns = 1;

  if (window.matchMedia('(min-width: 768px').matches) {
    columns = 2;
  }

  if (window.matchMedia('(min-width: 1280px').matches) {
    columns = 3;
  }

  if (window.matchMedia('(min-width: 1440px').matches) {
    columns = 4;
  }

  return columns;
}

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

class Things extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: true,
      show: false,
      animate: false,
      columns: getColumns(),
      info: this.randomThing(props.sketches, true),
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

    this.addEventListeners();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.resizeTimer);
  }

  addEventListeners() {
    window.addEventListener('resize', e => {
      clearTimeout(this.resizeTimer);

      this.resizeTimer = setTimeout(() => {
        this.setState({
          columns: getColumns()
        });
      }, 250);
    });
  }

  randomThing = (things, init) => {
    const _things = things.filter(t => {
      return init || (t.text !== this.state.info.text)
    });

    return _things[Math.floor(Math.random() * _things.length)];
  }

  onShuffle = () => {
    const iframeEl = this.mainRef.current.querySelector('iframe');

    const onIframeLoad = () => {
      clearTimeout(this.timer);

      this.setState({
        show: true
      });

      iframeEl.removeEventListener('load', onIframeLoad);
    };

    const onTransitionEnd = () => {
      this.setState({
        info: this.randomThing(this.props.sketches)
      }, () => {
        this.timer = setTimeout(() => {
          iframeEl.addEventListener('load', onIframeLoad);

          // in case it doesnt send load event
          this.timer = setTimeout(() => {
            onIframeLoad();
          }, 1000);
        }, 250);
      });

      this.mainRef.current.removeEventListener('transitionend', onTransitionEnd);
    };

    this.mainRef.current.addEventListener('transitionend', onTransitionEnd);

    this.setState({
      show: false
    });
  }

  render() {
    const { animate, show, info, data, columns } = this.state;

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
          <iframe title={info.text} className={styles.iframe} src={info.url} frameBorder="0" allow="camera; microphone"></iframe>

          <Attribution
            fullscreen
            text={info.text}
            onShuffle={this.onShuffle}/>
        </main>

        { !columns ? null : (
          <ThingsColumns
            columns={ columns }
            data={ data }/>
        ) }
      </div>
    )
  }
}

export default Things;
