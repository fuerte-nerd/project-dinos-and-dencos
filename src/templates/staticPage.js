import React from "react"
import ReactMarkdown from "react-markdown"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/Link"
import BannerHead from "../components/BannerHead"
import LangConsts from "../components/LanguageConstants"

const staticPage = props => {
  const { frontmatter } = props.data.text.childMarkdownRemark
  console.log(props)>

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
      />
      <div class="page-content extend-line-height container py-3">
        <ReactMarkdown source={frontmatter.main[props.lang]} />
        <div class="text-center">
          <p class="mb-0 text-center">
            {LangConsts.for_more_information[props.lang]}
          </p>
          <Link
            to="/contact"
            classes="btn btn-lg font-weight-bold btn-primary d-lg-inline-flex d-block align-items-center"
          >
            {LangConsts.contact_us[props.lang]}
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
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(staticPage)
