import React, { useState, useEffect } from 'react'

import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './Header.module.scss';

// import logoImg from '../../../images/logo.png';
import Logo from '../Logo/Logo';
import WobblyText from '../WobblyText/WobblyText';

const Header = ({ className, pinned, invert }) => {
  const [animateState, setAnimateState] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateState(true);
    }, 10);
    return () => clearTimeout(timer);
  })

  const cls = classNames(
    styles.header,
    className,
    {
      [styles.unpinned]: !pinned
    },
    {
      [styles.animate]: animateState
    }
  );

  return (
    <header className={cls}>
      <nav className={styles.container}>
        <h1 className={styles.title}>Home — JT</h1>
        <ul className={styles.links}>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/professional">Professional</Link></li>
          <li><Link to="/things">Things <WobblyText text="NEW"/></Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className={styles.image}>
          <Link to={"/"}><Logo width="40" height="40" invert={invert}/></Link>
        </div>
      </nav>
    </header>
  )
};

export default Header;
