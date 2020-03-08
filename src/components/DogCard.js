import React from "react"
import { connect } from "react-redux"

import { useStaticQuery, graphql } from "gatsby"
import Link from "./Link"
import moment from "moment"
import 'moment/locale/es'
import 'moment/locale/de'
import 'moment/locale/it'
import 'moment/locale/fr'

function DogCard(props) {

  const {data} = props
  const tempLangData = {
    sex: {
      en: {
        M: "Male",
        F: "Female",
      },
    },
  }

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
            age {
              en
              it
              de
              es
              fr
            }
            breed {
              en
              it
              de
              es
              fr
            }
            sex {
              en
              it
              de
              es
              fr
            }
          }
        }
      }
    }
  `)

  const { button_text, age, breed, sex } = dataQL.page_data.childMarkdownRemark.frontmatter

  return (
    <div class="col-lg-6 col-xl-4">
      <div class="card dog ani text-dark my-2">
        <img class="card-img-top" src={data.image} alt="Card image cap" />
        <div
          class="time-in-care position-absolute bg-light-trans rounded"
          style={{
            top: ".25rem",
            left: ".25rem",
          }}
        >
          <span class="small p-1">
            <span class="font-weight-bold">
              {moment(data.date_entered).toNow(true)}
            </span>{" "}
            in care
          </span>
        </div>
        <div class="card-body bg-primary text-light">
          <h3 class="card-title text-center font-weight-bold">{data.name}</h3>
        </div>

        <div class="card-body p-0">
          <table class="table table-sm table-light table-striped text-dark text-center small mb-0">
            <thead>
              <tr>
                <th>{age[props.lang]}</th>
                <th>{sex[props.lang]}</th>
                <th>{breed[props.lang]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(data.dob).toNow(true)}</td>
                <td>{tempLangData.sex.en[data.sex]}</td>
                <td>{data.breed}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={`dogs/${data.slug}`}
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
