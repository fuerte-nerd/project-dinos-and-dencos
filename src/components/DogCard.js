import React from "react"
import { connect } from "react-redux"

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import langConsts from "./LanguageConstants"
import Link from "./Link"
import moment from "moment"
import 'moment/locale/es'
import 'moment/locale/de'
import 'moment/locale/it'
import 'moment/locale/fr'

function DogCard(props) {

  const {data} = props
  
  moment.relativeTimeRounding(Math.floor)

  moment.locale(props.lang)

  const dataQL = useStaticQuery(graphql`
    query {
      page_data: file(name: { eq: "the_dogs" }) {
        childMarkdownRemark {
          frontmatter {
            button_text {
              en
              it
              de
              es
              fr
            }
            age_text {
              en
              it
              de
              es
              fr
            }
            breed_text {
              en
              it
              de
              es
              fr
            }
            sex_text {
              en
              it
              de
              es
              fr
            }
            in_care {
              en
              it
              de
              es
              fr
            }
          }
        }
      }
      images: allImageSharp {
        edges {
          node {
            id
            fluid (maxWidth: 1000, maxHeight: 1000, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imageToGatsbify = dataQL.images.edges.filter((img)=>{
    if(img.node.fluid.originalName === data.frontmatter.main_image.match(/(?<=\/).*/g)[0]){
      return img
    }
  })[0]

  const { button_text, age_text, breed_text, sex_text, in_care } = dataQL.page_data.childMarkdownRemark.frontmatter

  return (
    <div class="col-lg-6 col-xl-4">
      <div class="card dog ani text-dark my-2">
        <Img className="card-img-top" fluid={imageToGatsbify.node.fluid} />
        {/* <img class="card-img-top" src={data.image} alt="Card image cap" /> */}
        <div
          class="time-in-care position-absolute bg-light-trans rounded"
          style={{
            top: ".25rem",
            left: ".25rem",
          }}
        >
          <span class="small p-1">
            <span class="font-weight-bold">
              {moment(data.frontmatter.date_entered).toNow(true)}
            </span>{" "}
            {in_care[props.lang]}
          </span>
        </div>
        <div class="card-body bg-primary text-light">
          <h3 class="card-title text-center font-weight-bold">{data.frontmatter.name}</h3>
        </div>

        <div class="card-body p-0">
          <table class="table table-sm table-light table-striped text-dark text-center small mb-0">
            <thead>
              <tr>
                <th>{age_text[props.lang]}</th>
                <th>{sex_text[props.lang]}</th>
                <th>{breed_text[props.lang]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(data.frontmatter.date_of_birth).toNow(true)}</td>
                <td>{langConsts.sex[data.frontmatter.sex][props.lang]}</td>
                <td>{data.frontmatter.breed}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={data.fields.slug}
            classes="btn btn-block btn-success stretched-link"
          >
            <i class="mr-2 fas fa-info-circle"></i>
            {button_text[props.lang]}
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(DogCard)
