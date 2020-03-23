import React from "react"
import { connect } from "react-redux"
import { graphql, useStaticQuery } from "gatsby"

import LangConsts from "./LanguageConstants"

import Link from "./Link"
import PageShare from "./PageShare"

function FollowUp(props) {
  const query = useStaticQuery(graphql`
    query {
      labels: file(
        name: { eq: "labels" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            adopt {
              en
              es
              de
              it
              fr
            }
            foster {
              en
              es
              de
              it
              fr
            }
          }
        }
      }
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            can_you_help_prefix {
              en
              es
              de
              it
              fr
            }
            can_you_help_suffix {
              en
              es
              de
              it
              fr
            }
            find_out_more_adoption {
              en
              es
              de
              it
              fr
            }
            find_out_more_fostering {
              en
              es
              de
              it
              fr
            }
            cant_adopt_or_foster_prefix {
              en
              es
              de
              it
              fr
            }
            cant_adopt_or_foster_suffix {
              en
              es
              de
              it
              fr
            }
            back_to_the_dogs {
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

  const {
    can_you_help_prefix,
    can_you_help_suffix,
    find_out_more_adoption,
    find_out_more_fostering,
    cant_adopt_or_foster_prefix,
    cant_adopt_or_foster_suffix,
    back_to_the_dogs,
  } = query.dictionary.childMarkdownRemark.frontmatter

  return (
    <div class="dog-follow-up container rounded py-3 my-4 text-center">
      <h3>
        {can_you_help_prefix[props.lang]}
        {` `}
        {props.name}
        {` `}
        {can_you_help_suffix[props.lang]}
      </h3>
      <div class="row">
        <div class="col">
          <Link
            to="adopt"
            classes="btn btn-block btn-light font-weight-bold py-4"
          >
            <i class="d-block display-4 fas fa-paw"></i>
            {query.labels.childMarkdownRemark.frontmatter.adopt[props.lang]}
            <span class="d-block font-weight-normal small">
              {LangConsts.find_out_more.adoption[props.lang]}
            </span>
          </Link>
        </div>
        <div class="col">
          <Link
            to="foster"
            classes="btn btn-block btn-light font-weight-bold py-4"
          >
            <i class="d-block display-4 fas fa-bone"></i>
            {query.labels.childMarkdownRemark.frontmatter.foster[props.lang]}
            <span class="d-block font-weight-normal small">
              {LangConsts.find_out_more.fostering[props.lang]}
            </span>
          </Link>
        </div>
      </div>
      <p class="lead pt-4">
        {LangConsts.cant_adopt_or_foster.prefix[props.lang]}
        {props.name}
        {LangConsts.cant_adopt_or_foster.suffix[props.lang]}
      </p>
      <PageShare />
      <Link to="the-dogs" classes="btn btn-primary mt-4 font-weight-bold p-3">
        <i class="mr-3 fas fa-dog"></i>
        {LangConsts.back_to_the_dogs[props.lang]}
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(FollowUp)
