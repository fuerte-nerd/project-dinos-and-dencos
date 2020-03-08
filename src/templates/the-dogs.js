import React from "react"
import { connect } from "react-redux"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"
import Dogs from "../components/Dogs"

import TempImage from "../images/rafael-profile.jpg"

function TheDogs(props) {

  const dogs = props.data.dogs.edges

  const dogsArr = dogs.map((dog)=>{
    return dog.node.childMarkdownRemark.frontmatter
  })
  console.log(JSON.parse(props.pageContext.test))

  const {
    heading,
    subheading,
    listing_note,
  } = props.data.page_data.childMarkdownRemark.frontmatter
  return (
    <Layout title="The Dogs" showFooter={true}>
      <Spacer />
      <div>
        <div className="jumbotron bg-primary text-center mb-3 py-5 shadow">
          <div className="container-fluid text-light">
            <h1>{heading[props.lang]}</h1>
            <p class="lead">
              {subheading[props.lang]}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <small class="font-italic">
              {listing_note[props.lang]}
            </small>
          </div>
          <Dogs data={dogsArr} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    page_data: file(name: { eq: "the_dogs" }) {
      childMarkdownRemark {
        frontmatter {
          listing_note {
            en
            it
            de
            es
            fr
          }
          heading {
            de
            en
            it
            es
            fr
          }
          subheading {
            en
            de
            it
            es
            fr
          }
        }
      }
    }
    dogs: allFile(filter: {sourceInstanceName: {eq: "dogs"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              main_image
              breed
              date_of_birth
              date_entered
              sex
              location
              dog_friendly
              cat_friendly
              family_friendly
              ppp
              sterilised
              images
            }
          }
        }
      }
    }
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(TheDogs)
