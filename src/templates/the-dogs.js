import React from "react"
import { connect } from "react-redux"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"
import Dogs from "../components/Dogs"

import TempImage from "../images/rafael-profile.jpg"

function TheDogs(props) {
  const dogData = [
    {
      name: "Rafael",
      slug: "rafael-20200306",
      dob: new Date(2017, 5, 1),
      date_entered: new Date(2020, 1, 20),
      image: TempImage,
      sex: "M",
      breed: "Bardino",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
    {
      name: "Chispa",
      slug: "chispa-20200306",
      dob: new Date(2015, 5, 1),
      date_entered: new Date(2019, 1, 20),
      image: TempImage,
      sex: "F",
      breed: "Bardina",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
    {
      name: "Robert",
      slug: "robert-20200306",
      dob: new Date(2018, 1, 1),
      date_entered: new Date(2018, 1, 20),
      image: TempImage,
      sex: "M",
      breed: "Yorkie",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
    {
      name: "Rafael",
      slug: "rafael-20200306",
      dob: new Date(2017, 5, 1),
      date_entered: new Date(2020, 1, 20),
      image: TempImage,
      sex: "M",
      breed: "Bardino",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
    {
      name: "Chispa",
      slug: "chispa-20200306",
      dob: new Date(2015, 5, 1),
      date_entered: new Date(2019, 1, 20),
      image: TempImage,
      sex: "F",
      breed: "Bardina",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
    {
      name: "Robert",
      slug: "robert-20200306",
      dob: new Date(2018, 1, 1),
      date_entered: new Date(2018, 1, 20),
      image: TempImage,
      sex: "M",
      breed: "Yorkie",
      location: "shelter",
      dogs: 1,
      cats: 1,
      family: 1,
      ppp: false,
      sterile: false,
    },
  ]

  const {
    heading,
    subheading,
    listing_note,
  } = props.data.page_data.childMarkdownRemark.frontmatter
  return (
    <Layout title="The Dogs" showFooter={true}>
      <Spacer />
      <div>
        <div className="jumbotron bg-primary text-center mb-3 py-5 shadow">
          <div className="container-fluid text-light">
            <h1>{heading[props.lang]}</h1>
            <p class="lead">
              {subheading[props.lang]}
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <small class="font-italic">
              {listing_note[props.lang]}
            </small>
          </div>
          <Dogs data={dogData} />
        </div>
      </div>
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
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(TheDogs)
