import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Link(props) {
  return (
    <AniLink fade bg="#f07937" duration={.1} to={props.to} className={props.classes} activeClassName="active">
      {props.children} 
    </AniLink>
  )
}
