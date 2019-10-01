import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'gatsby';

import classNames from 'classnames';

import { ACTIONS } from '../../../state/createStore';

import styles from './HoverLink.module.scss';

const HoverLink = ({ children, to, className, image, noSmallImage = false }) => {
  const dispatch = useDispatch();

  const setBg = (img) => {
    dispatch({ type: ACTIONS.SET_BG_IMAGE, value: img });
  };

  const cls = classNames(
    styles.link,
    {
      [styles.noSmallImage]: noSmallImage
    },
    className
  )

  const props = {
    className: cls,
    style: {
      [`--jt-image`]: `url(${image})`
    }
  };

  if (image) {
    props.onMouseEnter = () => setBg(image);
    props.onMouseLeave = () => setBg(false);
    props.onClick = () => setBg(false);
  }

  if (to) {
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
      return <Link to={to} {...props}>{ children }</Link>;
    } else {
      return <a target="_blank" rel="noreferrer noopener" href={to} {...props}>{ children }</a>;
    }
  }

  return <span {...props}>{ children }</span>;
};

export default HoverLink;
