import React, { useState } from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import Img from 'gatsby-image'
import { Tooltip } from "reactstrap"

import LangConsts from "../components/LanguageConstants"

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
    images
  } = props.data.content.childMarkdownRemark.frontmatter

  moment.relativeTimeRounding(Math.floor)

  moment.locale(props.lang)

  const mainImage = props.data.main_image.edges.filter((img)=>{
    if(img.node.fluid.originalName === props.data.content.childMarkdownRemark.frontmatter.main_image.match(/(?<=\/).*/g)[0]){
      return img
    }
  })[0]

  const galleryImages = []
  props.data.gallery_thumbs.edges.map((img)=>{
    images.forEach((i)=>{
      if(img.node.fluid.originalName === i.match(/(?<=\/).*/g)[0]){
        galleryImages.push(img)
      }
    })
    })

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

  const getLocation = (code)=>{
    switch(parseInt(code)){
      case 0:
        return LangConsts.location.shelter[props.lang]
        break;
      case 1:
        return LangConsts.location.foster[props.lang]
        break;
      case 2:
        return LangConsts.location.other[props.lang]
    }
  }

  const getYesNo = (code) =>{
    switch(parseInt(code)){
      case 0:
        return LangConsts.yes[props.lang];
        break;
      case 1:
        return LangConsts.no[props.lang];
        break;
      case 2:
        return LangConsts.tbc[props.lang];
        break;
    }
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
            <Img fluid={mainImage.node.fluid} className="w-100 rounded border" />
          </div>
          <div className="col-lg-6">
            <div className="card bg-light my-3 my-lg-0 shadow">
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
                      <td class="text-center">{sex === 'M' ? LangConsts.sex.M[props.lang] : LangConsts.sex.F[props.lang]}</td>
                    </tr>
                    <tr>
                      <th>Breed</th>
                      <td class="text-center">{breed}</td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td class="text-center">{getLocation(location)}</td>
                    </tr>
                    <tr>
                      <th>Time in care</th>
                      <td class="text-center">
                        {moment(date_entered).toNow(true)}
                      </td>
                    </tr>
                    <tr>
                      <th>Dog-friendly?</th>
                      <td class="text-center">{getYesNo(dog_friendly)}</td>
                    </tr>
                    <tr>
                      <th>Cat-friendly?</th>
                      <td class="text-center">{getYesNo(cat_friendly)}</td>
                    </tr>
                    <tr>
                      <th>Family-friendly?</th>
                      <td class="text-center">{getYesNo(family_friendly)}</td>
                    </tr>
                    <tr>
                      <th>
                        Licence required?{" "}
                        <small class="font-italic" id="ppp">
                          (More info)
                        </small>
                      </th>
                      <td class="text-center">{ppp ? LangConsts.yes[props.lang] : LangConsts.no[props.lang]}</td>
                    </tr>
                    <tr>
                      <th>
                        Sterilised?{" "}
                        <small class="font-italic" id="sterile">
                          (More info)
                        </small>
                      </th>
                      <td class="text-center">{sterilised ? LangConsts.yes[props.lang] : LangConsts.no[props.lang]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mt-3">
          <div className="text-center">
            <div className="mb-2">
              <p className="font-weight-bold mb-0">Share</p>
              <p>
                <small>
                  Please help us to find this dog a home by sharing this page
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
        <PhotoGallery pics={galleryImages} />
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
          fluid (maxWidth: 1000, maxHeight: 1000, cropFocus: ENTROPY) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    gallery_thumbs: allImageSharp {
      edges {
        node {
          id
          fluid (maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
            originalName
          }
          original{
            src
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
