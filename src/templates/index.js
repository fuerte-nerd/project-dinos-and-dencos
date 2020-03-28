import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faDog } from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import { connect } from "react-redux"

import BackgroundImage from "gatsby-background-image"

import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import Link from "../components/Link"
import Loader from "../components/Loader"
import logo from "../images/logo.png"

const IndexPage = props => {
  const {
    heading,
    subheading,
    button_text,
  } = props.data.text.childMarkdownRemark.frontmatter

  const {
    facebook_username,
    instagram_username,
  } = props.data.social_media.childMarkdownRemark.frontmatter

  const { find_us } = props.data.dictionary.childMarkdownRemark.frontmatter

  return (
    <Layout
      title="Home"
      description="Cuidando de los perros abandonados y maltratados de la zona de La Oliva en Fuerteventura desde 2013. | Taking care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura since 2013."
      og={{
        title: "Fuerteventura Dog Rescue",
        description:
          "Cuidando de los perros abandonados y maltratados de la zona de La Oliva en Fuerteventura desde 2013. | Taking care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura since 2013.",
        image: props.data.og_image.childImageSharp.fixed.src,
        url: "http://www.fuerteventuradogrescue.org",
      }}
      showFooter={false}
      spacer={false}
      animateNav={true}
    >
      <Loader loaded={false} />
      <BackgroundImage
        className="min-vh-100 d-flex align-items-center align-items-md-end justify-content-start p-0 m-0"
        fluid={props.data.image.childImageSharp.fluid}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onLoad={() => console.log("loaded")}
      >
        <div className="h-100 w-100 position-absolute m-0 animated fadeInDownBig fast delay-1s hero-gradient-overlay" />
        <Container fluid>
          <Row className="d-flex align-items-end">
            <Col md={9}>
              <div className="hero-content-wrapper">
                <div className="p-2 p-lg-4 text-center text-md-left animated fadeIn fast delay-2s">
                  <img
                    src={logo}
                    alt="FDR logo"
                    className="hide-on-landscape-mobile"
                    style={{
                      width: "10.5rem",
                    }}
                  />
                  <h2
                    className="mt-2 h1 display-4"
                    style={{ lineHeight: "3.5rem" }}
                  >
                    {heading[props.lang]}
                  </h2>
                  <p className="lead">{subheading[props.lang]}</p>
                  <Link
                    to="the-dogs"
                    classes="btn btn-primary btn-lg font-weight-bold"
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faDog}
                      className="animated tada infinite slow mr-3"
                    />
                    {button_text[props.lang]}
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              md={3}
              className="text-center text-md-right hide-on-landscape-mobile"
            >
              <div className="p-0 p-lg-4 mt-2 mt-lg-0 animated fadeIn fast delay-2s">
                <small className="d-block font-weight-bold mb-2">
                  {find_us[props.lang]}
                </small>
                <div className="d-flex justify-content-center justify-content-md-end">
                  <a
                    href={`https://www.facebook.com/${facebook_username}`}
                    className="btn rounded-circle social social-facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href={`https://www.instagram.com/${instagram_username}`}
                    className="btn ml-2 rounded-circle social social-instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query($background_image: String!) {
    text: file(name: { eq: "home" }) {
      childMarkdownRemark {
        frontmatter {
          button_text {
            en
            it
            de
            es
            fr
          }
          heading {
            de
            en
            it
            es
            fr
          }
          subheading {
            en
            de
            it
            es
            fr
          }
        }
      }
    }
    image: file(relativePath: { eq: $background_image }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    og_image: file(relativePath: { eq: $background_image }) {
      childImageSharp {
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    social_media: file(
      name: { eq: "social_media" }
      sourceInstanceName: { eq: "content" }
    ) {
      childMarkdownRemark {
        frontmatter {
          facebook_username
          instagram_username
        }
      }
    }
    dictionary: file(name: { eq: "dictionary" }) {
      childMarkdownRemark {
        frontmatter {
          find_us {
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
`
const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(IndexPage)
