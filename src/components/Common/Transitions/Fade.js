import React from 'react';

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transitionDuration: `${duration}ms`,
  transitionTimingFunction: `ease-in-out`,
  transitionProperty: `opacity, transform`,
  opacity: 0,
  transform: `translate3d(0, -10px, 0)`
}

const transitionStyles = {
  entering: {
    opacity: 1,
    transform: `translate3d(0, 0, 0)`
  },
  entered:  {
    opacity: 1,
    transform: `translate3d(0, 0, 0)`
  },
  exiting:  {
    opacity: 0,
    transform: `translate3d(0, -10px, 0)`
  },
  exited:  {
    opacity: 0,
    transform: `translate3d(0, -10px, 0)`
  },
};

const Fade = ({ in: inProp, children, ...props }) => {
  return (
    <Transition
      in={inProp}
      timeout={{
        appear: 500,
        enter: 300,
        exit: 500,
       }}
       {...props}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          { children }
        </div>
      )}
    </Transition>
  );
}

export default Fade;
