import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"

import moment from "moment"
import Link from "./Link"
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"

function MainArticleCard(props) {
  moment.locale(props.lang)
  const article = props.data.childMarkdownRemark.frontmatter
  const query = useStaticQuery(graphql`
    query {
      gallery_thumbs: allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 492, maxHeight: 400, cropFocus: ENTROPY) {
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
            most_recent {
              en
              es
              de
              it
              fr
            }
            read_more {
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
  `)

  const filename = article.featured_image.replace("assets/", "")
  const thumb = query.gallery_thumbs.edges.filter(i => {
    if (i.node.fluid.originalName === filename) {
      return i
    }
    return null
  })[0]

  const {
    most_recent,
    read_more,
  } = query.dictionary.childMarkdownRemark.frontmatter
  return (
    <Card className="article ani text-dark">
      <CardBody>
        <Row>
          <Col lg={6}>
            <p className="text-muted font-weight-bold small">
              {most_recent[props.lang]}
            </p>
            <div>
              <CardTitle className="h2 mb-0">
                {article[`content_${props.lang}`][`title_${props.lang}`]}
              </CardTitle>
              <p className="d-inline-block mb-2 small bg-primary p-1 rounded text-light">
                <small>
                  {moment(new Date(article.date)).format("D MMMM YYYY")}
                </small>
              </p>
            </div>
            <Img
              fluid={thumb.node.fluid}
              className="w-100 rounded d-lg-none mb-3 mb-lg-0"
            />
            <p
              className="text-justify"
              style={{
                height: "6rem",
              }}
            >
              {article[`content_${props.lang}`][`intro_${props.lang}`]}
            </p>
          </Col>

          <Col lg={6}>
            <Img
              fluid={thumb.node.fluid}
              className="w-100 rounded d-none d-lg-inline-block"
            />
          </Col>
        </Row>
        <Link
          to={props.data.childMarkdownRemark.fields.slug}
          classes="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          {read_more[props.lang]}
        </Link>
      </CardBody>
    </Card>
  )
}
const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(MainArticleCard)
