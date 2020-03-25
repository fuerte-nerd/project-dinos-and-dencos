import React from "react"
import Layout from "../components/layout"
import Link from "../components/Link"

import Logo from "../images/logo.png"

export default function Thanks() {
  return (
    <Layout title="Thanks" showFooter={false} spacer={false} hideNav={true}>
      <div className="min-vh-100 container d-flex justify-content-center align-items-center">
        <img src={Logo} alt="FDR Logo" />
        <p className="mt-3">
          <span className="d-block font-weight-bold">
            Thank you for your message!
          </span>
          We will reply as soon as possible.
        </p>

        <p>
          We will redirect you back to the site shortly, but if you can't
          wait...
        </p>
        <Link to="contact" classes="btn btn-primary btn-lg ">
          Take me back now!
        </Link>
      </div>
    </Layout>
  )
}
