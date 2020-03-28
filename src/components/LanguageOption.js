import React from "react"
import { setLanguage, toggleLanguageModal } from "../state/actions"
import { connect } from "react-redux"
import { Button } from "reactstrap"

function LanguageOption(props) {
  const handleClick = () => {
    props.dispatch(setLanguage(props.lang, props.flag))
    props.dispatch(toggleLanguageModal())
  }

  return (
    <Button color="dark" block outline onClick={handleClick}>
      <span>{props.language}</span>
    </Button>
  )
}
export default connect()(LanguageOption)
