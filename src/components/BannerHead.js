import React from "react"
import { connect } from "react-redux"
import Link from "../components/Link"

const BannerHead = props => {
  return (
    <div class="jumbotron bg-primary text-light shadow mb-0">
      <h1>{props.heading}</h1>
      <p class="lead">{props.subheading}</p>
      {props.path === "/donate" ? (
        <a
          href="http://www.paypal.com"
          className="btn btn-l btn-primary d-inline-flex align-items-center"
        >
          Donate <i className="fab fa-paypal ml-3" />
        </a>
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(BannerHead)
