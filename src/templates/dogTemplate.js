import React, { useState } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { Tooltip } from "reactstrap"

import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"
import PageShare from "../components/PageShare"
import FollowUp from "../components/FollowUp"
import PhotoGallery from "../components/PhotoGallery"

import moment from "moment"

import Temp from "../images/rafael-profile.jpg"

function DogTemplate(props) {
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
    headline,
    description,
  } = props.data.content.childMarkdownRemark.frontmatter

  moment.relativeTimeRounding(Math.floor)

  moment.locale(props.lang)

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

  return (
    <Layout title="Dog" showFooter={true}>
      <Spacer />
      <Spacer />
      <Tooltip
        placement="top"
        isOpen={tooltips.ppp}
        target="ppp"
        toggle={toggle.ppp}
      >
        <small>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          autem quibusdam perferendis quia, impedit voluptatem!
        </small>
      </Tooltip>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <img
              src={Temp}
              alt="Rafael"
              className="w-100 rounded border animated delay-1s fadeIn"
            />
          </div>
          <div className="col-lg-6">
            <div className="card bg-light animated my-3 my-lg-0 shadow fadeIn delay-1s fast">
              <div className="card-body p-0">
                <h1 className="card-title bg-primary py-3 font-weight-bold text-light text-center mb-0 rounded-top">
                  {name}
                </h1>
                <table className="table table-light table-striped text-dark mb-0 table-bordered table-sm small">
                  <tbody>
                    <tr>
                      <th>Age</th>
                      <td class="text-center">
                        {moment(date_of_birth).toNow(true)}
                      </td>
                    </tr>
                    <tr>
                      <th>Sex</th>
                      <td class="text-center">{sex}</td>
                    </tr>
                    <tr>
                      <th>Breed</th>
                      <td class="text-center">{breed}</td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td class="text-center">{location}</td>
                    </tr>
                    <tr>
                      <th>Time in care</th>
                      <td class="text-center">
                        {moment(date_entered).toNow(true)}
                      </td>
                    </tr>
                    <tr>
                      <th>Dog-friendly?</th>
                      <td class="text-center">{dog_friendly}</td>
                    </tr>
                    <tr>
                      <th>Cat-friendly?</th>
                      <td class="text-center">{cat_friendly}</td>
                    </tr>
                    <tr>
                      <th>Family-friendly?</th>
                      <td class="text-center">{family_friendly}</td>
                    </tr>
                    <tr>
                      <th>
                        Licence required?{" "}
                        <small class="font-italic" id="ppp">
                          (More info)
                        </small>
                      </th>
                      <td class="text-center">{ppp}</td>
                    </tr>
                    <tr>
                      <th>
                        Sterilised?{" "}
                        <small class="font-italic" id="sterile">
                          (More info)
                        </small>
                      </th>
                      <td class="text-center">{sterilised}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mt-3 animated fadeIn delay-1s">
          <div className="text-center">
            <div className="mb-2">
              <p className="font-weight-bold mb-0">Share</p>
              <p>
                <small>
                  Please help us to find a home by sharing this page
                  with your friends! Thank you
                </small>
              </p>
            </div>
            <PageShare />
          </div>
        </div>
      </div>
      <div className="bg-light text-dark py-5 my-4 shadow">
        <div className="container">
          <p className="lead text-center font-weight-bold mb-0">
            {headline[props.lang]}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="dog-description py-3 text-justify" dangerouslySetInnerHTML={{__html: description[props.lang]}}>
          
        </div>
        <PhotoGallery />
        <FollowUp />
      </div>
    </Layout>
  )
}
export const dogQuery = graphql`
  query($id: String!) {
    content: file(id: { eq: $id }) {
      childMarkdownRemark {
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
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(DogTemplate)
