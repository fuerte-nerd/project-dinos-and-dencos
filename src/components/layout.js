/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { connect } from "react-redux"

import detectBrowserLanguage from "detect-browser-language"

import { setLanguage, toggleNav } from "../state/actions"

import Head from "./Head"
import PropTypes from "prop-types"

import Navigation from "./Navigation"
import Spacer from "./ContentSpacer"
import Footer from "./Footer"

import "./styles.scss"

const Layout = props => {
  useEffect(() => {
    //check for localstorage
    if (localStorage.getItem("fdr_lang")) {
      props.dispatch(setLanguage(localStorage.getItem("fdr_lang")))
    } else {
      const browserLanguage = detectBrowserLanguage().substring(0, 2)

      props.dispatch(setLanguage(browserLanguage))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(props)
  const checkNav = () => {
    if (props.navIsOpen) {
      props.dispatch(toggleNav())
    }
  }

  return (
    <>
      <Head title={props.title} og={props.og} />
      {props.hideNav ? null : <Navigation />}
      <div onClick={checkNav} role="button" tabIndex="0">
        {props.spacer ? <Spacer /> : null}
        <main className="animated fadeIn faster">{props.children}</main>
        <Footer show={props.showFooter} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  lang: state.language.lang,
  navIsOpen: state.navigation.navIsOpen,
})
export default connect(mapStateToProps)(Layout)
