import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"

import moment from "moment"

import { Card, CardBody, CardTitle, Table, Tooltip } from "reactstrap"

import LangConsts from "./LanguageConstants.js"

function DogFactFile(props) {
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
        return LangConsts.location.shelter[props.lang]
      case 1:
        return LangConsts.location.foster[props.lang]
      case 2:
        return LangConsts.location.other[props.lang]
      default:
        return null
    }
  }

  const getYesNo = code => {
    switch (parseInt(code)) {
      case 0:
        return LangConsts.yes[props.lang]
      case 1:
        return LangConsts.no[props.lang]
      case 2:
        return LangConsts.tbc[props.lang]
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
                <th>{LangConsts.age[props.lang]}</th>
                <td class="text-center">
                  {moment(date_of_birth).toNow(true)}{" "}
                  <span className="text-muted small d-block">
                    ({moment(date_of_birth).format("DD/MM/YYYY")})
                  </span>
                </td>
              </tr>
              <tr>
                <th>{LangConsts.sex.sex[props.lang]}</th>
                <td class="text-center">
                  {sex === "M"
                    ? LangConsts.sex.M[props.lang]
                    : LangConsts.sex.F[props.lang]}
                </td>
              </tr>
              <tr>
                <th>{LangConsts.breed[props.lang]}</th>
                <td class="text-center">{breed}</td>
              </tr>
              <tr>
                <th>{LangConsts.location.location[props.lang]}</th>
                <td class="text-center">{getLocation(location)}</td>
              </tr>
              <tr>
                <th>{LangConsts.time_in_care[props.lang]}</th>
                <td class="text-center">
                  {moment(new Date()).diff(moment(date_entered), "days")}{" "}
                  {LangConsts.days[props.lang]}
                  <span className="text-muted small d-block">
                    ({moment(date_entered).format("DD/MM/YYYY")})
                  </span>
                </td>
              </tr>
              <tr>
                <th>{LangConsts.dog_friendly[props.lang]}?</th>
                <td class="text-center">{getYesNo(dog_friendly)}</td>
              </tr>
              <tr>
                <th>{LangConsts.cat_friendly[props.lang]}?</th>
                <td class="text-center">{getYesNo(cat_friendly)}</td>
              </tr>
              <tr>
                <th>{LangConsts.family_friendly[props.lang]}?</th>
                <td class="text-center">{getYesNo(family_friendly)}</td>
              </tr>
              <tr>
                <th>
                  {LangConsts.licence_required[props.lang]}?{" "}
                  <small class="font-italic" id="ppp">
                    ({LangConsts.more_info[props.lang]})
                  </small>
                </th>
                <td class="text-center">
                  {ppp ? LangConsts.yes[props.lang] : LangConsts.no[props.lang]}
                </td>
              </tr>
              <tr>
                <th>
                  {LangConsts.sterilised[props.lang]}?{" "}
                  <small class="font-italic" id="sterile">
                    ({LangConsts.more_info[props.lang]})
                  </small>
                </th>
                <td class="text-center">
                  {sterilised
                    ? LangConsts.yes[props.lang]
                    : LangConsts.no[props.lang]}
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
