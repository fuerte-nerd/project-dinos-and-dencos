import React from "react"
import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"

import TempImage from "../images/rafael-profile.jpg"

export default function Contact() {
  return (
    <Layout title="Contact us" showFooter={true}>
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
        <h1>Contact us</h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusantium neque deserunt quasi, commodi maiores ab voluptatem
          quisquam ratione libero?
        </p>
      </div>
      <div class="page-content extend-line-height container py-3">
        <div class="my-3">
          <h2>Messenger</h2>
          <p class="text-left">
            The most efficient way to contact us is via Facebook Messenger...
          </p>
          <a
            href="http://www.messenger.com"
            class="btn btn-lg font-weight-bold btn-primary d-block d-lg-inline-block align-items-center"
          >
            <div class="d-flex align-items-center justify-content-center">
              Get in touch on Messenger{" "}
              <i class="ml-3 fab fa-facebook-messenger display-4"></i>
            </div>
          </a>
        </div>
        <div class="my-3">
          <h2>"I don't use Messenger..."</h2>
          <p>
            No problem! Complete and submit the form below and we will get back
            to you as soon as possible...
          </p>
          <form>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col-md-6 mt-3 mt-md-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
              <div class="col-md-6 mt-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-md-6 mt-3">
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
            </div>
            <div class="row">
              <div class="col mt-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block font-weight-bold my-3"
              >
                Send <i class="ml-2 far fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
