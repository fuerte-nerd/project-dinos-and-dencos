import React from "react"
import { connect } from "react-redux"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Col, Card, CardBody, CardTitle, Table } from "reactstrap"

import Link from "./Link"

import moment from "moment"
import "moment/locale/es"
import "moment/locale/de"
import "moment/locale/it"
import "moment/locale/fr"

function DogCard(props) {
  const { data } = props

  moment.relativeTimeRounding(Math.floor)

  moment.locale(props.lang)

  const dataQL = useStaticQuery(graphql`
    query {
      images: allImageSharp {
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
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            age {
              en
              es
              de
              it
              fr
            }
            sex_sex {
              en
              es
              de
              it
              fr
            }
            sex_m {
              en
              es
              de
              it
              fr
            }
            sex_f {
              en
              es
              de
              it
              fr
            }
            breed_text {
              en
              it
              de
              fr
              es
            }
            days {
              en
              es
              de
              fr
              it
            }
            in_care {
              fr
              en
              es
              de
              it
            }
            more_info {
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
  `)

  const {
    age,
    sex_sex,
    sex_m,
    sex_f,
    breed_text,
    days,
    in_care,
    more_info,
  } = dataQL.dictionary.childMarkdownRemark.frontmatter

  const imageToGatsbify = dataQL.images.edges.filter(img => {
    if (
      img.node.fluid.originalName ===
      data.frontmatter.main_image.match(/(?<=\/).*/g)[0]
    ) {
      return img
    }
    return null
  })[0]

  return (
    <Col lg={6} xl={4}>
      <Card className="ani text-dark my-2">
        <Img
          className="card-img-top"
          alt={data.frontmatter.name}
          fluid={imageToGatsbify.node.fluid}
        />
        <div
          className="position-absolute bg-light-trans rounded"
          style={{
            top: ".25rem",
            left: ".25rem",
          }}
        >
          <span className="small p-1">
            <span className="font-weight-bold">
              {moment(new Date()).diff(
                moment(data.frontmatter.date_entered),
                "days"
              )}{" "}
              {days[props.lang]}
            </span>{" "}
            {in_care[props.lang]}
          </span>
        </div>
        <CardBody className="bg-primary text-light m-0 p-0">
          <CardTitle className="h2 text-center py-3 mb-0">
            {data.frontmatter.name}
          </CardTitle>
          <Table
            size="sm"
            striped
            className="text-center small mb-0 bg-light text-dark"
          >
            <thead>
              <tr>
                <th>{age[props.lang]}</th>
                <th>{sex_sex[props.lang]}</th>
                <th>{breed_text[props.lang]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(data.frontmatter.date_of_birth).toNow(true)}</td>
                <td>
                  {data.frontmatter.sex === "M"
                    ? sex_m[props.lang]
                    : sex_f[props.lang]}
                </td>
                <td>{data.frontmatter.breed}</td>
              </tr>
            </tbody>
          </Table>
          <Link
            to={data.fields.slug}
            classes="btn btn-block btn-success stretched-link"
          >
            <i className="mr-2 fas fa-info-circle"></i>
            {more_info[props.lang]}
          </Link>
        </CardBody>
      </Card>
    </Col>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(DogCard)
