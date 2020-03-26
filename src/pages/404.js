import React from "react"
import { graphql } from "gatsby"
import Link from "../components/Link"
import Layout from "../components/layout"

const NotFoundPage = props => (
  <Layout
    og={{
      description: "Cannot find page",
      image: null,
      url: "http://www.fuerteventuradogrescue.org",
    }}
    spacer={true}
  >
    <div className="container">
      <h1>Sorry!</h1>
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

export default NotFoundPage
