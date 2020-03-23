import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import { Container, Row, Col } from "reactstrap"

import logo from "../images/logo.png"

import LeafletMap from "./LeafletMap"

function Footer(props) {
  const { lang } = props

  const query = useStaticQuery(graphql`
    query {
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            registered_charity {
              en
              it
              de
              fr
              es
            }
            website_by {
              en
              es
              de
              it
              fr
            }
          }
        }
      }
    }
  `)
  const {
    registered_charity,
    website_by,
  } = query.dictionary.childMarkdownRemark.frontmatter
  return props.show ? (
    <footer class="bg-dark py-3">
      <Container>
        <Row>
          <Col lg={6} className="text-center text-lg-left pb-3 pb-lg-0">
            <img src={logo} width="150" alt="FDR Logo" />
            <p className="pt-3 pb-0 pb-lg-3">
              <span className="d-block font-weight-bold">
                Fuerteventura Dog Rescue
              </span>
              <span className="d-block">Calle Juan Cabrera Méndez</span>
              <span className="d-block">La Oliva</span>
              <span className="d-block">36540</span>
              <span className="d-block">Fuerteventura</span>
            </p>

            <div className="pt-2 py-lg-0">
              <a href="mailto:info@fuerteventuradogrescue.org">
                <i class="fas fa-envelope d-block d-lg-inline-block"></i>
                <span class="ml-3">info@fuerteventuradogrescue.org</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <Helmet>
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
              />
            </Helmet>
            <LeafletMap />
          </Col>
        </Row>
        <small class="text-center d-block mt-4">
          {registered_charity[lang]}
        </small>
        <small class="text-center d-block">G1/S1/19399-13/F</small>
        <small class="text-center d-block text-muted mt-1">
          {website_by[lang]}
          {`  `}
          <a href="mailto:fuertenerd@gmail.com">Fuertenerd</a>
        </small>
      </Container>
    </footer>
  ) : null
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(Footer)
