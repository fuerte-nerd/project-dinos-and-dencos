/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { connect } from "react-redux"

import detectBrowserLanguage from "detect-browser-language"

import { setLanguage } from "../state/actions"

import Head from "./Head"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { TransitionPortal } from "gatsby-plugin-transition-link"

import Navigation from "./Navigation"
import Footer from "./Footer"

import "./styles.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    //check for localstorage
    if (localStorage.getItem("fdr_lang")) {
      props.dispatch(setLanguage(localStorage.getItem("fdr_lang")))
    } else {
      const browserLanguage = detectBrowserLanguage().substring(0, 2)

      props.dispatch(setLanguage(browserLanguage))
    }
  }, [])

  return (
    <>
      <Head title={props.title} />
      {/* <TransitionPortal> */}
      <Navigation />
      {/* </TransitionPortal> */}
      <main className="animated fadeIn faster">{props.children}</main>
      <Footer show={props.showFooter} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(Layout)
