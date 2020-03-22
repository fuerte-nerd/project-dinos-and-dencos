import React from "react"
import { connect } from "react-redux"

const BannerHead = props => {
  return (
    <div class="jumbotron bg-light text-dark position-relative overflow-hidden mb-0">
      <h1>{props.heading}</h1>
      <p class="lead">{props.subheading}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(BannerHead)
