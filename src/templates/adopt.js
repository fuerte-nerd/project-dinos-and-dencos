import React from "react"
import Layout from "../components/layout"

const adopt = () => {
  return (
    <Layout
      title="Adopt"
      spacer={true}
      showFooter={true}
      og={{
        description: "This is the description",
        image: "image+url+here",
        url: "fuerteventuradogrescue.org",
      }}
    >
      <h1>I am the adopt page</h1>
    </Layout>
  )
}

export default adopt
