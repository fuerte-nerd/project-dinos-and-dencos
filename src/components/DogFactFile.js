import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import moment from "moment"

import { Card, CardBody, CardTitle, Table, Tooltip } from "reactstrap"

import LangConsts from "./LanguageConstants.js"

function DogFactFile(props) {
  const dataQL = useStaticQuery(graphql`
    query {
      dictionary: file(name: { eq: "dictionary" }) {
        id
        childMarkdownRemark {
          frontmatter {
            breed_text {
              en
              it
              de
              fr
              es
            }
            location_shelter {
              en
              es
              de
              it
              fr
            }
            location_location {
              en
              es
              de
              it
              fr
            }
            location_other {
              en
              es
              de
              it
              fr
            }
            yes {
              en
              es
              de
              it
              fr
            }
            no {
              en
              es
              de
              it
              fr
            }
            tbc {
              en
              es
              de
              it
              fr
            }
            age {
              en
              es
              fr
              de
              it
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
            location_foster {
              en
              es
              de
              it
              fr
            }
            time_in_care {
              en
              es
              de
              it
              fr
            }
            days {
              en
              es
              de
              it
              fr
            }
            licence_required {
              en
              es
              de
              it
              fr
            }
            sterilised_text {
              en
              es
              de
              it
              fr
            }
            dog_friendly_text {
              en
              es
              de
              it
              fr
            }
            family_friendly_text {
              en
              es
              de
              it
              fr
            }
            cat_friendly_text {
              en
              es
              de
              it
              fr
            }
            more_info {
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

  const {
    name,
    breed,
    date_of_birth,
    date_entered,
    sex,
    location,
    dog_friendly,
    cat_friendly,
    family_friendly,
    ppp,
    sterilised,
  } = props.data

  const {
    breed_text,
    location_shelter,
    location_location,
    location_other,
    location_foster,
    yes,
    no,
    tbc,
    age,
    sex_sex,
    sex_m,
    sex_f,
    time_in_care,
    days,
    licence_required,
    sterilised_text,
    dog_friendly_text,
    cat_friendly_text,
    family_friendly_text,
    more_info,
  } = dataQL.dictionary.childMarkdownRemark.frontmatter

  const [tooltips, setTooltips] = useState({
    ppp: false,
    sterile: false,
  })

  const toggle = {
    ppp() {
      setTooltips({
        ...tooltips,
        ppp: !tooltips.ppp,
      })
    },
    sterile() {
      setTooltips({
        ...tooltips,
        sterile: !tooltips.sterile,
      })
    },
  }

  const getLocation = code => {
    switch (parseInt(code)) {
      case 0:
        return location_shelter[props.lang]
      case 1:
        return location_foster[props.lang]
      case 2:
        return location_other[props.lang]
      default:
        return null
    }
  }

  const getYesNo = code => {
    switch (parseInt(code)) {
      case 0:
        return yes[props.lang]
      case 1:
        return no[props.lang]
      case 2:
        return tbc[props.lang]
      default:
        return null
    }
  }
  return (
    <>
      <Tooltip
        placement="top"
        isOpen={tooltips.ppp}
        target="ppp"
        toggle={toggle.ppp}
      >
        <small>
          {/*Netlify*/}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          autem quibusdam perferendis quia, impedit voluptatem!
        </small>
      </Tooltip>
      <Tooltip
        placement="top"
        isOpen={tooltips.sterile}
        target="sterile"
        toggle={toggle.sterile}
      >
        <small>
          {/*Netlify*/}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          autem quibusdam perferendis quia, impedit voluptatem!
        </small>
      </Tooltip>
      <Card className="bg-light my-3 my-lg-0 shadow">
        <CardBody className="p-0">
          <CardTitle className="h2 bg-primary py-3 text-light text-center mb-0 rounded-top">
            {name}
          </CardTitle>
          <Table
            striped
            bordered
            className="table-light text-dark mb-0 table-sm small"
          >
            <tbody>
              <tr>
                <th>{age[props.lang]}</th>
                <td class="text-center">
                  {moment(date_of_birth).toNow(true)}{" "}
                  <span className="text-muted small d-block">
                    ({moment(date_of_birth).format("DD/MM/YYYY")})
                  </span>
                </td>
              </tr>
              <tr>
                <th>{sex_sex[props.lang]}</th>
                <td class="text-center">
                  {sex === "M" ? sex_m[props.lang] : sex_f[props.lang]}
                </td>
              </tr>
              <tr>
                <th>{breed_text[props.lang]}</th>
                <td class="text-center">{breed}</td>
              </tr>
              <tr>
                <th>{location_location[props.lang]}</th>
                <td class="text-center">{getLocation(location)}</td>
              </tr>
              <tr>
                <th>{time_in_care[props.lang]}</th>
                <td class="text-center">
                  {moment(new Date()).diff(moment(date_entered), "days")}{" "}
                  {days[props.lang]}
                  <span className="text-muted small d-block">
                    ({moment(date_entered).format("DD/MM/YYYY")})
                  </span>
                </td>
              </tr>
              <tr>
                <th>{dog_friendly_text[props.lang]}?</th>
                <td class="text-center">{getYesNo(dog_friendly)}</td>
              </tr>
              <tr>
                <th>{cat_friendly_text[props.lang]}?</th>
                <td class="text-center">{getYesNo(cat_friendly)}</td>
              </tr>
              <tr>
                <th>{family_friendly_text[props.lang]}?</th>
                <td class="text-center">{getYesNo(family_friendly)}</td>
              </tr>
              <tr>
                <th>
                  {licence_required[props.lang]}?{" "}
                  <small class="font-italic" id="ppp">
                    ({more_info[props.lang]})
                  </small>
                </th>
                <td class="text-center">
                  {ppp ? yes[props.lang] : no[props.lang]}
                </td>
              </tr>
              <tr>
                <th>
                  {sterilised_text[props.lang]}?{" "}
                  <small class="font-italic" id="sterile">
                    ({more_info[props.lang]})
                  </small>
                </th>
                <td class="text-center">
                  {sterilised ? yes[props.lang] : no[props.lang]}
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(DogFactFile)
