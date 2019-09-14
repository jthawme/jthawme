import React from "react"
import PropTypes from "prop-types"

import { Link } from 'gatsby';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollReact from "../ScrollReact";

import "../../../styles/global.scss";
import styles from "./Layout.module.scss"

import logoImg from "../../../images/logo.png";

const Layout = ({ children }) => {
  return (
    <ScrollReact>
      {
        scrollState => (
          <>
            <Header className={styles.header} {...scrollState}/> }

            <div className={styles.top}>
              <Link to={"/"} className={styles.logo}><img src={logoImg}/></Link>
            </div>

            {children}

            <Footer/>
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
