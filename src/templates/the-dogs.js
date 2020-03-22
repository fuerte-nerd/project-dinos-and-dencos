import React from "react"
import { connect } from "react-redux"

import { graphql } from "gatsby"

import { Jumbotron, Container } from "reactstrap"

import Layout from "../components/layout"
import Dogs from "../components/Dogs"
import BannerHead from "../components/BannerHead"

function TheDogs(props) {
  const dogs = props.data.dogs.edges

  const dogsArr = dogs.map(dog => {
    return dog.node.childMarkdownRemark
  })

  const {
    heading,
    subheading,
    listing_note,
  } = props.data.page_data.childMarkdownRemark.frontmatter

  const { the_dogs } = props.data.labels.childMarkdownRemark.frontmatter
  return (
    <Layout
      title={the_dogs[props.lang]}
      showFooter={true}
      spacer={true}
      og={{
        description: subheading[props.lang],
      }}
    >
      <Jumbotron fluid className="bg-primary text-center mb-3 py-5 shadow">
        <Container fluid className="text-light">
          <h1>{heading[props.lang]}</h1>
          <p class="lead">{subheading[props.lang]}</p>
        </Container>
      </Jumbotron>
      <Container className="text-center">
        <small class="font-italic">{listing_note[props.lang]}</small>
        <Dogs data={dogsArr} />
      </Container>
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
    labels: file(name: { eq: "labels" }) {
      childMarkdownRemark {
        frontmatter {
          the_dogs {
            en
            it
            de
            es
            fr
          }
        }
      }
    }
    dogs: allFile(
      filter: { sourceInstanceName: { eq: "dogs" } }
      sort: {
        order: ASC
        fields: childMarkdownRemark___frontmatter___date_entered
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            fields {
              slug
            }
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
