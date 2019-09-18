import React from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollReact from "../ScrollReact";
import BgImage from "../BgImage/BgImage";

import "../../../styles/global.scss";
import styles from "./Layout.module.scss"

import logoImg from "../../../images/logo.png";

const Layout = ({ children }) => {
  return (
    <ScrollReact>
      {
        scrollState => (
          <>
            <Header className={styles.header} {...scrollState}/>

            <div className={styles.top}>
              <Link to={"/"} className={styles.logo}><img alt="" src={logoImg}/></Link>
            </div>

            <BgImage className={styles.bg} />

            {children}

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
