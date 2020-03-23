import React from "react"
import ReactMarkdown from "react-markdown"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/Link"
import BannerHead from "../components/BannerHead"

const staticPage = props => {
  const { frontmatter } = props.data.text.childMarkdownRemark

  const {
    for_more_information,
    contact_us,
  } = props.data.dictionary.childMarkdownRemark.frontmatter

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
      <BannerHead
        heading={frontmatter.heading[props.lang]}
        subheading={frontmatter.subheading[props.lang]}
        path={props.path}
      />
      <div class="page-content extend-line-height container py-3">
        <ReactMarkdown source={frontmatter.main[props.lang]} />
        <div class="text-center">
          <p class="mb-0 text-center">{for_more_information[props.lang]}</p>
          <Link
            to="/contact"
            classes="btn btn-lg font-weight-bold btn-primary d-lg-inline-flex d-block align-items-center"
          >
            {contact_us[props.lang]}
            <i class="ml-3 fas fa-paw"></i>
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
    dictionary: file(name: { eq: "dictionary" }) {
      childMarkdownRemark {
        frontmatter {
          for_more_information {
            en
            es
            de
            it
            fr
          }
          contact_us {
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
