import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BannerHead from "../components/BannerHead"
import LangConsts from "../components/LanguageConstants"

const contactTemplate = props => {
  const { frontmatter } = props.data.text.childMarkdownRemark
  console.log(props)

  return (
    <Layout
      title={frontmatter.heading[props.lang]}
      spacer={true}
      showFooter={true}
      og={{
        description: frontmatter.subheading[props.lang],
        image: "image+url+here",
        url: "fuerteventuradogrescue.org",
      }}
    >
      <BannerHead
        heading={frontmatter.heading[props.lang]}
        subheading={frontmatter.subheading[props.lang]}
        path={props.path}
      />
      <div class="page-content extend-line-height container py-3"></div>
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
          No problem! Complete and submit the form below and we will get back to
          you as soon as possible...
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
              <input type="text" class="form-control" placeholder="Last name" />
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
  }
`

const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(contactTemplate)
