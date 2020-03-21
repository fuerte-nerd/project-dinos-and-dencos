import React from "react"
import ReactMarkdown from "react-markdown"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/Link"
import TempImage from "../images/chispa-chopped.jpg"
import TempImage2 from "../images/article.jpg"

const staticPage = props => {
  const { frontmatter } = props.data.text.childMarkdownRemark
  return (
    <Layout
      title={frontmatter.heading[props.lang]}
      spacer={true}
      showFooter={true}
      og={{
        description: frontmatter.subheading[props.lang],
        image: "image+url+here",
        url: "fuerteventuradogrescue.org",
      }}
    >
      <div class="jumbotron bg-light-trans text-dark position-relative overflow-hidden mb-0">
        <img
          src={TempImage}
          alt="Rafael"
          class="w-100 position-absolute"
          style={{
            top: 0,
            left: 0,
            zIndex: -50,
          }}
        />
        <h1>{frontmatter.heading[props.lang]}</h1>
        <p class="lead">{frontmatter.subheading[props.lang]}</p>
      </div>
      <div class="page-content extend-line-height container py-3">
        <ReactMarkdown source={frontmatter.main[props.lang]} />
        <div class="text-center">
          <p class="mb-0 text-center">For more information about adopting...</p>
          <Link
            to="/contact"
            classes="btn btn-lg font-weight-bold btn-primary d-lg-inline-flex d-block align-items-center"
          >
            Contact us<i class="ml-3 fas fa-paw"></i>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
export const staticQuery = graphql`
  query($id: String!) {
    text: file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          heading {
            en
            es
            de
            it
            fr
          }
          main {
            en
            es
            de
            it
            fr
          }
          subheading {
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
export default connect(mapStateToProps)(staticPage)
