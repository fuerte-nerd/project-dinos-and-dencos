import React from "react"

const Loader = props => {
  return props.loaded ? (
    <div className="position-fixed min-vh-100 min-vw-100 bg-secondary"></div>
  ) : null
}

export default Loader
