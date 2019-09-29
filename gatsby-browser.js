import React from 'react';
import animateScrollTo from 'animated-scroll-to';


import Layout from './src/components/Common/Layout/Layout.js';
import wrapElement from './src/state/wrapElement';

// Apply persisted layout
export const wrapPageElement = ({ element, props }) => <Layout {...props}>{ element }</Layout>;

// Apply redux provider
export const wrapRootElement = wrapElement;

export const shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }) => {
  if (routerProps.location.action === 'PUSH') {
    // new place
    animateScrollTo(0);
  } else {
    const savedPosition = getSavedScrollPosition(routerProps.location)

    setTimeout(() => animateScrollTo(savedPosition), 250);
  }

  return false
}
