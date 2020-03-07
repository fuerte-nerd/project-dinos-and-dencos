import React from "react"
import { setLanguage } from "../state/actions"
import { connect } from 'react-redux'

import { Button } from "reactstrap"

function LanguageOption(props) {

  const handleClick = ()=>{
    props.dispatch(setLanguage(props.flag))
  }

  return (
    <Button
      color="dark"
      block
      outline
      className="d-flex justify-content-between align-items-center"
      onClick={handleClick}
    >
      <span className="">{props.language}</span>
      <span class={`flag-icon flag-icon-${props.flag}`}></span>
    </Button>
  )
}
export default connect()(LanguageOption)