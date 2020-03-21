import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import LangConsts from "../components/LanguageConstants"
import { graphql } from "gatsby"
import Link from "../components/Link"
import Layout from "../components/layout"
import { connect } from "react-redux"
import ReactMarkdown from "react-markdown"

const Article = props => {
  const { frontmatter } = props.data.content.childMarkdownRemark

  return (
    <Layout
      title={frontmatter[`content_${props.lang}`][`title_${props.lang}`]}
      og={{
        description:
          frontmatter[`content_${props.lang}`][`intro_${props.lang}`],
      }}
      spacer={true}
      showFooter={true}
    >
      <Link
        to="articles"
        classes="btn btn-block btn-sm text-left rounded-0 btn-dark"
      >
        <i class="fas fa-arrow-left mr-1"></i>{" "}
        {LangConsts.back_to_articles[props.lang]}
      </Link>
      <div
        class="jumbotron d-flex justify-content-center align-items-center bg-transparent rounded-0 position-relative overflow-hidden my-0"
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <Img
          fluid={props.data.image.childImageSharp.fluid}
          className="position-absolute w-100 animated fadeIn"
          style={{ top: 0, left: 0, zIndex: -50 }}
        />

        {/*<img
          src={data.featured_image}
          alt="Article pic"
          class="position-absolute w-100 animated fadeIn"
          style={{
            top: 0,
            left: 0,
            zIndex: -50,
          }}
        />*/}
        <div class="animated fadeIn delay-1s d-flex justify-content-center">
          <div class="d-inline-block">
            <h1 class="bg-primary-trans p-3 d-inline-block h2 mb-0 rounded-top rounded-right">
              {frontmatter[`content_${props.lang}`][`title_${props.lang}`]}
            </h1>
            <div>
              <p class="bg-dark-trans p-1 px-3 d-inline-block mb-0 rounded-bottom small">
                {LangConsts.by[props.lang]} {frontmatter.author}{" "}
                {LangConsts.date_on[props.lang]}{" "}
                {moment(frontmatter.date).format("D MMMM YYYY")}
              </p>
            </div>
            <div class="pt-3">
              <div class="post-social justify-content-start">
                <a
                  href="http://www.facebook.com"
                  class="button button-small facebook mr-2"
                >
                  <span class="icon">
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a
                  href="http://www.twitter.com"
                  class="button button-small twitter mr-2"
                >
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                </a>
                <a
                  href="http://www.whatsapp.com"
                  class="button button-small whatsapp"
                >
                  <span class="icon">
                    <i class="fab fa-whatsapp"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light text-dark text-center p-4">
        <p class="lead container mb-0">
          {frontmatter[`content_${props.lang}`][`intro_${props.lang}`]}
        </p>
      </div>
      <div class="article-content container py-4 extend-line-height">
        <ReactMarkdown
          source={frontmatter[`content_${props.lang}`][`body_${props.lang}`]}
        />
        <div class="text-center">
          <button class="btn btn-outline-light btn-lg">
            {LangConsts.comments[props.lang]}
            <i class="ml-3 far fa-comments"></i>
          </button>
        </div>
      </div>
    </Layout>
  )
}
export const articleQuery = graphql`
  query($id: String!, $image: String!) {
    content: file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          author
          date
          featured_image
          content_de {
            body_de
            title_de
            intro_de
          }
          content_en {
            title_en
            intro_en
            body_en
          }
          content_es {
            body_es
            title_es
            intro_es
          }
          content_fr {
            body_fr
            title_fr
            intro_fr
          }
          content_it {
            title_it
            body_it
            intro_it
          }
          tags
        }
      }
    }
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1920, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(Article)
