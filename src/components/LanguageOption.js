import React from "react"
import ReactCountryFlag from "react-country-flag"
import { setLanguage, toggleLanguageModal } from "../state/actions"
import { connect } from "react-redux"

import { Button } from "reactstrap"

function LanguageOption(props) {
  const handleClick = () => {
    props.dispatch(setLanguage(props.lang, props.flag))
    props.dispatch(toggleLanguageModal())
  }

  return (
    <Button
      color="dark"
      block
      outline
      className="d-flex justify-content-between align-items-center"
      onClick={handleClick}
    >
      <span>{props.language}</span>
      <ReactCountryFlag code="GB" />
      <span className={`flag-icon flag-icon-${props.flag}`}></span>
    </Button>
  )
}
export default connect()(LanguageOption)
