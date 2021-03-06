import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BannerHead from "../components/BannerHead"

const contactTemplate = props => {
  const {
    messenger_intro,
    heading,
    subheading,
    messenger_button_text,
    i_dont_use_messenger,
    contact_form_intro,
    contact_name,
    email,
    phone,
    write_your_message,
    send,
  } = props.data.text.childMarkdownRemark.frontmatter
  const { contact } = props.data.labels.childMarkdownRemark.frontmatter
  return (
    <Layout
      title={contact[props.lang]}
      spacer={true}
      showFooter={true}
      og={{
        description: subheading[props.lang],
        image: "image+url+here",
        url: "fuerteventuradogrescue.org",
      }}
    >
      <BannerHead
        heading={heading[props.lang]}
        subheading={subheading[props.lang]}
        path={props.path}
      />
      <div class="page-content extend-line-height container py-3">
        <div class="my-3">
          <h2>Messenger</h2>
          <p class="text-left">{messenger_intro[props.lang]}</p>
          <a
            href="http://www.messenger.com"
            class="btn btn-lg font-weight-bold btn-primary d-block d-lg-inline-block align-items-center"
          >
            <div class="d-flex align-items-center justify-content-center">
              {messenger_button_text[props.lang]}{" "}
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className="display-4 ml-2"
              />
            </div>
          </a>
        </div>
        <div class="my-3">
          <h2>"{i_dont_use_messenger[props.lang]}"</h2>
          <p>{contact_form_intro[props.lang]}</p>
          <form
            name="contact"
            method="POST"
            action="/pages/success"
            data-netlify="true"
          >
            <div class="row">
              <div class="col-md-4">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder={contact_name[props.lang]}
                />
              </div>
              <div class="col-md-4 mt-3 mt-md-0">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder={email[props.lang]}
                />
              </div>
              <div class="col-md-4 mt-3 mt-md-0">
                <input
                  type="text"
                  name="phone"
                  class="form-control"
                  placeholder={phone[props.lang]}
                />
              </div>
            </div>
            <div class="row">
              <div class="col mt-3">
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  rows="3"
                  placeholder={write_your_message[props.lang]}
                ></textarea>
              </div>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block font-weight-bold my-3"
              >
                {send[props.lang]}{" "}
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export const staticQuery = graphql`
  query($id: String!) {
    text: file(id: { eq: $id }) {
      childMarkdownRemark {
        frontmatter {
          heading {
            en
            es
            de
            it
            fr
          }
          subheading {
            en
            es
            de
            it
            fr
          }
          messenger_intro {
            en
            es
            de
            it
            fr
          }
          messenger_button_text {
            en
            es
            de
            it
            fr
          }
          i_dont_use_messenger {
            en
            es
            de
            it
            fr
          }
          contact_form_intro {
            en
            es
            de
            it
            fr
          }
          contact_name {
            en
            es
            de
            it
            fr
          }
          email {
            en
            es
            de
            it
            fr
          }
          phone {
            en
            es
            de
            it
            fr
          }
          write_your_message {
            en
            es
            de
            it
            fr
          }
          send {
            en
            es
            de
            it
            fr
          }
        }
      }
    }
    labels: file(name: { eq: "labels" }) {
      childMarkdownRemark {
        frontmatter {
          contact {
            en
            es
            de
            it
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
export default connect(mapStateToProps)(contactTemplate)
