import React from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby';
import classNames from 'classnames';

import PageTransition from "../Transitions/PageTransition";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollReact from "../ScrollReact";
import BgImage from "../BgImage/BgImage";

import "../../../styles/global.scss";
import styles from "./Layout.module.scss"

import logoImg from "../../../images/logo.png";
import Logo from "../Logo/Logo";

const Layout = ({ children, location }) => {
  const bodyCls = classNames(
    `page-${location.pathname.split('/').pop()}`
  );

  document.body.setAttribute('class', bodyCls);

  return (
    <ScrollReact>
      {
        scrollState => (
          <>
            <Header className={styles.header} {...scrollState}/>

            <div className={styles.top}>
              <Link to={"/"} className={styles.logo}><Logo width="64" height="64"/></Link>
            </div>

            <BgImage className={styles.bg} />

            <PageTransition>
              { children }
            </PageTransition>

            <Footer className={styles.footer}/>
          </>
        )
      }
    </ScrollReact>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
