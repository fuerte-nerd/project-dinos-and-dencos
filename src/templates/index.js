import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import BackgroundImage from "gatsby-background-image"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"

import logo from "../images/logo.png"
import bg from "../images/bg1.jpg"

const IndexPage = props => {
  const {
    heading,
    subheading,
    button_text,
  } = props.data.text.childMarkdownRemark.frontmatter

  const {
    find_us_text,
    facebook_username,
    instagram_username,
  } = props.data.social_media.childMarkdownRemark.frontmatter
console.log(props)
  return (
    <Layout title="Home" showFooter={false}>
      <BackgroundImage
        className="min-vh-100 d-flex align-items-center align-items-md-end justify-content-start p-0 m-0"
        fluid={props.data.image.childImageSharp.fluid}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-100 w-100 position-absolute m-0 animated fadeInDownBig fast delay-1s hero-gradient-overlay" />
        <div className="container-fluid">
          <div className="row d-flex align-items-end">
            <div className="col-xs-12 col-md-9">
              <div className="hero-content-wrapper">
                <div className="p-4 text-center text-md-left animated fadeIn fast delay-2s">
                  <img
                    src={logo}
                    alt="FDR logo"
                    style={{
                      width: "10.5rem",
                    }}
                  />
                  <h2 className="mt-2 h1 font-weight-bold">
                    {heading[props.lang]}
                  </h2>
                  <p className="lead">{subheading[props.lang]}</p>
                  <AniLink
                    fade
                    to="/the-dogs"
                    className="btn btn-primary btn-lg font-weight-bold"
                  >
                    {" "}
                    <i className="animated tada infinite slow mr-3 fas fa-dog"></i>
                    {button_text[props.lang]}
                  </AniLink>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-3 text-center text-md-right">
              <div className="p-4 animated fadeIn fast delay-2s">
                <small className="d-block font-weight-bold mb-2">
                  {find_us_text[props.lang]}
                </small>
                <div className="d-flex justify-content-center justify-content-md-end">
                  <a
                    href={`https://www.facebook.com/${facebook_username}`}
                    className="btn rounded-circle social social-facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href={`https://www.instagram.com/${instagram_username}`}
                    className="btn ml-2 rounded-circle social social-instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    social_media: file(
      name: { eq: "social_media" }
      sourceInstanceName: { eq: "content" }
    ) {
      childMarkdownRemark {
        frontmatter {
          facebook_username
          instagram_username
          find_us_text {
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

// ($background_image: String!)
