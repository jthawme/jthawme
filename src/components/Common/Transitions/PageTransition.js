import React from 'react';

import { ENTERING, ENTERED, EXITING, EXITED } from 'react-transition-group/Transition';

import Fade from './Fade';

const areDifferentComponents = (el1, el2) => {
  if (el1 === el2) {
    return false;
  }

  if (el2 && el2.key === el1.key) {
    return false;
  }

  return true;
}

class PageTransition extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: props.children || null,
      inStatus: true
    };
  }

  componentDidUpdate(oldProps, oldState) {
    if (areDifferentComponents(this.props.children, oldProps.children)) {
      this.setState({
        inStatus: false
      });
    }
  }

  onExited = () => {
    this.setState({
      current: this.props.children
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({
          inStatus: true
        })
      });
    });
  }

  render() {
    const { inStatus, current } = this.state;

    return (
      <Fade
        key={current.key}
        in={inStatus}
        onExited={this.onExited}
        appear>
        { current }
      </Fade>
    )
  }
}

export default PageTransition;
