import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout
    og={{
      description: "Cannot find page",
      image: null,
      url: "http://www.fuerteventuradogrescue.org",
    }}
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
