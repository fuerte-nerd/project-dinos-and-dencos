import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import FactFile from "../components/DogFactFile.js"
import PageShare from "../components/PageShare"
import FollowUp from "../components/FollowUp"
import PhotoGallery from "../components/PhotoGallery"

import moment from "moment"

function DogTemplate(props) {
  const {
    name,
    headline,
    description,
    images,
  } = props.data.content.childMarkdownRemark.frontmatter

  const {
    find_a_home_prefix,
    find_a_home_suffix,
    share,
  } = props.data.dictionary.childMarkdownRemark.frontmatter

  moment.relativeTimeRounding(Math.floor)

  moment.locale(props.lang)

  const mainImage = props.data.main_image.edges.filter(img => {
    if (
      img.node.fluid.originalName ===
      props.data.content.childMarkdownRemark.frontmatter.main_image.match(
        /(?<=\/).*/g
      )[0]
    ) {
      return img
    }
    return null
  })[0]

  const ogImage = props.data.og_image.edges.filter(img => {
    if (
      img.node.fixed.originalName ===
      props.data.content.childMarkdownRemark.frontmatter.main_image.match(
        /(?<=\/).*/g
      )[0]
    ) {
      return img
    }
    return null
  })[0]

  const galleryImages = []
  props.data.gallery_thumbs.edges.map(img => {
    images.forEach(i => {
      if (img.node.fluid.originalName === i.match(/(?<=\/).*/g)[0]) {
        galleryImages.push(img)
      }
      return
    })
    return null
  })

  return (
    <Layout
      title={name}
      showFooter={true}
      spacer={true}
      og={{
        description: headline[props.lang],
        image: ogImage.node.fixed.src,
        url: `http://www.fuerteventuradogrescue.org${props.data.content.childMarkdownRemark.fields.slug}`,
      }}
    >
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6}>
            <Img
              fluid={mainImage.node.fluid}
              className="w-100 rounded border"
            />
          </Col>
          <Col lg={6}>
            <FactFile
              data={props.data.content.childMarkdownRemark.frontmatter}
            />
          </Col>
        </Row>
        <div className="p-2 mt-3">
          <div className="text-center">
            <div className="mb-2">
              <p className="font-weight-bold mb-0">{share[props.lang]}</p>
              <p>
                <small>
                  {find_a_home_prefix[props.lang]}
                  {name}
                  {find_a_home_suffix[props.lang]}
                </small>
              </p>
            </div>
            <PageShare />
          </div>
        </div>
      </Container>
      <div className="bg-light text-dark py-5 my-4 shadow">
        <Container>
          <p className="lead text-center font-weight-bold mb-0">
            {headline[props.lang]}
          </p>
        </Container>
      </div>
      <Container>
        <div
          className="dog-description py-3 text-justify"
          dangerouslySetInnerHTML={{ __html: description[props.lang] }}
        ></div>
        <PhotoGallery name={name} pics={galleryImages} />
        <FollowUp name={name} />
      </Container>
    </Layout>
  )
}
export const dogQuery = graphql`
  query($id: String!) {
    content: file(id: { eq: $id }) {
      childMarkdownRemark {
        fields {
          slug
        }
        frontmatter {
          name
          breed
          date_entered
          date_of_birth
          sex
          location
          dog_friendly
          cat_friendly
          family_friendly
          images
          main_image
          ppp
          sterilised
          headline {
            en
            es
            de
            fr
            it
          }
          description {
            en
            es
            de
            fr
            it
          }
        }
      }
    }
    main_image: allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    og_image: allImageSharp {
      edges {
        node {
          id
          fixed(width: 1200, height: 630, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
    gallery_thumbs: allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
            originalName
          }
          original {
            src
          }
        }
      }
    }
    dictionary: file(name: { eq: "dictionary" }) {
      childMarkdownRemark {
        frontmatter {
          find_a_home_prefix {
            en
            es
            de
            it
            fr
          }
          find_a_home_suffix {
            en
            es
            de
            it
            fr
          }
          share {
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

export default connect(mapStateToProps)(DogTemplate)
