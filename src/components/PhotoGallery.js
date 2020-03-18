import React from "react"
import { connect } from "react-redux"
import Img from "gatsby-image"

import { Row, Col } from "reactstrap"

import LangConsts from "./LanguageConstants"

function PhotoGallery(props) {
  return (
    <div className="dog-gallery bg-primary p-3 rounded shadow-sm">
      <h3>{LangConsts.photos[props.lang]}</h3>
      <Row className="dog-gallery-gallery">
        {props.pics.map(i => {
          return (
            <Col sm={6} md={4} lg={3}>
              <a href={i.node.original.src}>
                <Img
                  fluid={i.node.fluid}
                  className="w-100 rounded img-thumbnail bg-light my-2 dog-image"
                />
              </a>
            </Col>
          )
        })}
      </Row>
      <div className="text-center small">{`${
        LangConsts.video_request[props.lang]
      }  ${props.name}`}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(PhotoGallery)
