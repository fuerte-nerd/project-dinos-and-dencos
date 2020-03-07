import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"

import logo from "../images/logo.png"
import bg from "../images/bg1.jpg"

const IndexPage = () => {

  return (
  <Layout title="Home" showFooter={false}>
    <div
      className="min-vh-100 d-flex align-items-center align-items-md-end justify-content-start p-0 m-0"
      style={{
        background: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-100 w-100 position-absolute m-0 animated fadeInDownBig fast delay-1s hero-gradient-overlay" />
      <div className="container-fluid">
        <div className="row d-flex align-items-end">
          <div className="col-xs-12 col-md-9">
            <div className="hero-content-wrapper">
              <div className="p-4 text-center text-md-left animated fadeIn fast delay-2s">
                <img
                  src={logo}
                  alt="FDR logo"
                  style={{
                    width: "10.5rem",
                  }}
                />
                <h2 className="mt-2 h1 font-weight-bold">We are their voice!</h2>
                <p className="lead">
                  Taking care of the abandoned and mistreated dogs from the La
                  Oliva area of Fuerteventura since 2013.
                </p>
                <AniLink
                  fade
                  
                  to="/the-dogs"
                  className="btn btn-primary btn-lg font-weight-bold"
                >
                  {" "}
                  <i className="animated tada infinite slow mr-3 fas fa-dog"></i>Meet the dogs!
                </AniLink>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-3 text-center text-md-right">
            <div className="p-4 animated fadeIn fast delay-2s">
              <small className="d-block font-weight-bold mb-2">Find us on...</small>
              <div className="d-flex justify-content-center justify-content-md-end">
                <a href="#" className="btn rounded-circle social social-facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="btn ml-2 rounded-circle social social-instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)}

export default IndexPage
