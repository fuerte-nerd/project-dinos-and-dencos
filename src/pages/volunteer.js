import React from "react"
import Layout from "../components/layout"
import Link from "../components/Link"

import Spacer from "../components/ContentSpacer"

import TempImage from "../images/rafael-profile.jpg"

import TempImage2 from "../images/article.jpg"

export default function Volunteer() {
  return (
    <Layout title="Volunteer" showFooter={true}>
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
        <h1>Volunteer</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusantium neque deserunt quasi, commodi maiores ab voluptatem
          quisquam ratione libero?
        </p>
      </div>
      <div class="page-content extend-line-height container py-3">
        <h2>Subheading One</h2>
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
          class="w-100 img-thumbnail bg-light mb-3"
        />
        <h2>Subheading Two</h2>
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
          class="w-100 img-thumbnail bg-light mb-3"
        />
        <div class="text-center">
          <p class="mb-0 text-center">For more information about volunteering...</p>
          <Link
            to="/contact"
            classes="btn btn-lg font-weight-bold btn-primary d-lg-inline-flex d-block align-items-center"
          >
            Contact us<i class="ml-3 fas fa-hands-helping"></i>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
