import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Link from "../components/Link"
import Layout from "../components/layout"

const NotFoundPage = props => {
  const {
    sorry,
    take_me_home,
    page_does_not_exist,
  } = props.data.file.childMarkdownRemark.frontmatter
  return (
    <Layout
      og={{
        description: "Cannot find page",
        image: null,
        url: "http://www.fuerteventuradogrescue.org",
      }}
      spacer={true}
    >
      <div className="container">
        <h1>{sorry[props.lang]}</h1>
        <p>{page_does_not_exist[props.lang]}</p>
        <Link to="/" classes="btn btn-primary btn-lg">
          {take_me_home[props.lang]}
        </Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    file(name: { eq: "notfound" }) {
      childMarkdownRemark {
        frontmatter {
          sorry {
            en
            es
            de
            it
            fr
          }
          page_does_not_exist {
            en
            es
            de
            it
            fr
          }
          take_me_home {
            en
            es
            de
            fr
            it
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(NotFoundPage)
