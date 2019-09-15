import React from 'react';
import Layout from './src/components/Common/Layout/Layout.js';
import wrapElement from './src/state/wrapElement';

// Apply persisted layout
export const wrapPageElement = ({ element, props }) => <Layout {...props}>{ element }</Layout>;

// Apply redux provider
export const wrapRootElement = wrapElement;
