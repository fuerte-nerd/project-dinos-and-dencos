import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/Link"

import Logo from "../images/logo.png"

export default function Thanks() {
  useEffect(() => {
    setTimeout(() => {
      navigate("/contact")
    }, 7500)
  }, [])

  return (
    <Layout
      title="Thanks"
      showFooter={false}
      spacer={false}
      hideNav={true}
      og={{
        description: "Fuerteventura Dog Rescue",
      }}
    >
      <div className="min-vh-100 container d-flex justify-content-center align-items-center">
        <div className="message text-center animated fadeInDown">
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
      </div>
    </Layout>
  )
}
