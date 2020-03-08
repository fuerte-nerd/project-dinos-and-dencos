import React from "react"

import Layout from "../src/components/layout"
import Spacer from "../src/components/ContentSpacer"
import Dogs from "../src/components/Dogs"

import TempImage from "../images/rafael-profile.jpg"

export default function TheDogs() {

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
  return (
    <Layout title="The Dogs" showFooter={true}>
      <Spacer />
      <div>
        <div className="jumbotron bg-primary text-center mb-3 py-5 shadow">
          <div className="container-fluid text-light">
            <h1>Meet The Dogs!</h1>
            <p class="lead">
              We have lots of beautiful dogs waiting for their home. Come and
              meet them! They can't wait to meet you!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <small class="font-italic">
              <span class="font-weight-bold">NOTE:</span> We have listed the
              dogs from the longest time they have been in our care to the
              shortest, so that they get the fairest chance of being seen.
            </small>
          </div>
          <Dogs data={dogData} />
        </div>
      </div>
    </Layout>
  )
}
