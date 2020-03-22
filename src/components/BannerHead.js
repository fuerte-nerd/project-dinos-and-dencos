import React from "react"
import { connect } from "react-redux"
import LangConsts from "./LanguageConstants"

const BannerHead = props => {
  return (
    <div class="jumbotron bg-primary text-light shadow mb-0">
      <h1>{props.heading}</h1>
      <p class="lead">{props.subheading}</p>
      {props.path === "/donate" ? (
        <a
          href="http://www.paypal.com"
          className="btn btn-lg btn-light d-inline-flex align-items-center"
        >
          <div>
            {LangConsts.donate_now[props.lang]}
            <i className="fab fa-paypal ml-3" />
          </div>
        </a>
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(BannerHead)
