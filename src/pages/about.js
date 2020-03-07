import React from "react"
import Layout from "../components/layout"

import Spacer from "../components/ContentSpacer"

import TempImage from "../images/rafael-profile.jpg"

import TempImage2 from "../images/article.jpg"

export default function About() {
  return (
    <Layout title="About us" showFooter={true}>
      <Spacer />
      <div class="jumbotron bg-light-trans text-dark position-relative overflow-hidden mb-0">
        <img
          src={TempImage}
          alt="Rafael"
          class="w-100 position-absolute"
          style={{
            top: 0,
            left: 0,
            zIndex: -50,
          }}
        />
        <h1>About us</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusantium neque deserunt quasi, commodi maiores ab voluptatem
          quisquam ratione libero?
        </p>
      </div>
      <div class="page-content extend-line-height container py-3">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est in
          corporis sunt? Veritatis fugiat illo reiciendis id quae, consequuntur
          nobis expedita fuga esse odio doloribus rerum eaque aut exercitationem
          qui optio debitis minus autem commodi nostrum iure ipsa ea doloremque
          officiis! Hic, earum. Nobis minus aliquam consectetur aperiam
          voluptatem, minima, totam impedit tempore incidunt amet quidem dicta
          explicabo, autem enim!
        </p>
        <img
          src={TempImage2}
          alt="Chispa"
          class="w-100 img-thumbnail bg-light"
        />
      </div>
    </Layout>
  )
}
