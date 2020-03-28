import React from "react"
import { setLanguage, toggleLanguageModal } from "../state/actions"
import { connect } from "react-redux"
import Flag from "react-world-flags"
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
      <Flag code="gb" />
      <span className={`flag-icon flag-icon-${props.flag}`}></span>
    </Button>
  )
}
export default connect()(LanguageOption)
