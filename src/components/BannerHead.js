import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

const BannerHead = props => {
  const query = useStaticQuery(graphql`
    query {
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            donate_now {
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
  `)

  const { donate_now } = query.dictionary.childMarkdownRemark.frontmatter
  return (
    <div class="jumbotron bg-primary text-light shadow">
      <h1>{props.heading}</h1>
      <p class="lead">{props.subheading}</p>
      {props.path === "/donate" ? (
        <a
          href="http://www.paypal.com"
          className="btn btn-lg btn-light d-inline-flex align-items-center"
        >
          <div>
            {donate_now[props.lang]}
            <i className="fab fa-paypal ml-3" />
          </div>
        </a>
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(BannerHead)
