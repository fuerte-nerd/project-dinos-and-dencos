import React from "react"

const Loader = (props) => {
  return (
    {props.loaded ? null : (

    <div className="min-vh-100 min-vw-100 bg-secondary">
      </div>
    )}
  )
}

export default Loader
