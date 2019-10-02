import React, { useRef, useEffect } from 'react';

import { generate } from './LogoGenerate'

import styles from './Logo.module.scss';

const Logo = ({ width = 128, height = 128 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    regen();
  }, [])

  const regen = () => {
    const ctx = canvasRef.current.getContext('2d');

    generate(canvasRef.current, ctx, width, height, width / 32);
  }

  let timer;
  const timedRegen = () => {
    clearTimeout(timer);

    regen();

    timer = setTimeout(() => {
      timedRegen();
    }, 250);
  }

  const clearRegen = () => {
    clearTimeout(timer);
  }

  const style = {
    width: `${ width }px`,
    height: `${ height }px`,
  };

  return <canvas style={style} onMouseOver={timedRegen} onMouseLeave={clearRegen} onClick={clearRegen} className={styles.canvas} ref={canvasRef}></canvas>
}

export default Logo;
