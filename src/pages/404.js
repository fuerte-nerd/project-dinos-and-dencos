import React from "react"
import { graphql } from "gatsby"
import Link from "../components/Link"
import Layout from "../components/layout"

const NotFoundPage = props => {
  const {
    sorry,
    take_me_home,
    page_does_not_exist,
  } = props.data.childMarkdownRemark.frontmatter
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
        <h1>{sorry}</h1>
        <p>
          This page doesn't exist here. We have either removed it or you have
          entered an incorrect address.
        </p>
        <Link to="/" classes="btn btn-primary btn-lg">
          Take me home!
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
export default NotFoundPage
