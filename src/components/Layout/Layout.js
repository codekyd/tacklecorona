import React, { useEffect } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header"
import "../../fonts/icomoon/style.css";

import "../../css/bootstrap.min.css";
import "../../css/jquery-ui.css";
import "../../css/owl.carousel.min.css";
import "../../css/owl.theme.default.min.css";
import "../../css/jquery.fancybox.min.css";

import "../../css/bootstrap-datepicker.css";

import "../../fonts/flaticon/font/flaticon.css";

import "../../css/aos.css";
import './Layout.css';
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
 
      <div className="site-wrap">
      <Header siteTitle={data.site.siteMetadata.title} />

        <>{children}</>
        <Footer/>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
