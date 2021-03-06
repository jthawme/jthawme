import React from 'react';
import PropTypes from 'prop-types';

export const SCROLL_DIRS = {
  UP: 0,
  DOWN: 1
};

class ScrollReact extends React.Component {
  static propTypes = {
    root: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),
    topThreshold: PropTypes.number,
    deltaThreshold: PropTypes.number,
  };

  static defaultProps = {
    root: 'body',
    topThreshold: 100,
    deltaThreshold: 50
  };

  constructor(props) {
    super(props);

    this.lastY = 0;
    this.commitY = 0;
    this.ticking = false;
    this.delta = false;

    this.state = {
      pinned: false,
      show: false
    };
  }

  componentDidMount() {
    this.addEventListeners();

    this.lastY = window.scrollY;
    this.update();
  }

  getRoot() {
    return typeof this.props.root === 'string' ? document.querySelector(this.props.root) : this.props.root;
  }

  addEventListeners() {
    window.addEventListener('scroll', () => {
      this.lastY = window.scrollY;
      this.requestTick();
    });
  }

  requestTick() {
    if (!this.ticking) {
      requestAnimationFrame(this.update);
      this.ticking = true;
    }
  }

  update = () => {
    const state = {};
    let delta = this.lastY - this.commitY;

    if ((delta < 0 && this.delta > 0) || (delta < 0 && this.delta === false)) {
      state.direction = SCROLL_DIRS.UP;
    } else if ((delta > 0 && this.delta < 0) || (delta > 0 && this.delta === false)) {
      state.direction = SCROLL_DIRS.DOWN;
    } else {
      state.direction = this.state.direction;
    }

    state.pinned = (this.lastY < this.props.topThreshold);

    if (Math.abs(delta) > this.props.deltaThreshold) {
      state.show = state.direction === SCROLL_DIRS.UP;
    }

    this.delta = delta;
    this.commitY = this.lastY;

    if (this.state.direction !== state.direction || this.state.pinned !== state.pinned) {
      this.setState(state, () => {
        this.ticking = false;
      });
    } else {
      this.ticking = false;
    }
  }

  render() {
    const { children } = this.props;

    return children(this.state)
  }
}

export default ScrollReact;
