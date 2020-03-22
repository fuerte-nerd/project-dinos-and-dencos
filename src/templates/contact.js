import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BannerHead from "../components/BannerHead"
import LangConsts from "../components/LanguageConstants"

const contactTemplate = props => {
  const { frontmatter } = props.data.text.childMarkdownRemark
  console.log(props)

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
      <div class="page-content extend-line-height container py-3"></div>
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
          subheading {
            en
            es
            de
            it
            fr
          }
          messenger_intro {
            en
            es
            de
            it
            fr
          }
          messenger_intro {
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
export default connect(mapStateToProps)(contactTemplate)
