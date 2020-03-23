import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import moment from "moment"

import LangConsts from "./LanguageConstants"

function ArticleCard(props) {
  const article = props.data.node.childMarkdownRemark.frontmatter
  console.log(article)
  const imgThumbQuery = useStaticQuery(graphql`
    query {
      gallery_thumbs: allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 492, maxHeight: 400, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid
              originalName
            }
            original {
              src
            }
          }
        }
      }
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            read_more {
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
  const thumb = imgThumbQuery.gallery_thumbs.edges.filter(i => {
    if (
      i.node.fluid.originalName ===
      article.featured_image.match(/(?<=\/).*/g)[0]
    ) {
      return i
    }
    return null
  })[0]
  moment.locale(props.lang)

  const { read_more } = props.data.dictionary.childMarkdownRemark.frontmatter
  return (
    <div class="ani article card text-dark">
      <div class="card-body">
        <h3 class="card-title mb-0">
          {article[`content_${props.lang}`][`title_${props.lang}`]}
        </h3>
        <p class="d-inline-block mb-2 small bg-primary p-1 rounded text-light">
          <small>{moment(new Date(article.date)).format("D MMMM YYYY")}</small>
        </p>
        <Img fluid={thumb.node.fluid} className="w-100 rounded d-block" />

        {/* <img
          src={data.featured_image}
          alt="Rafael"
          class="w-100 rounded d-block"
          /> */}
        <p
          class="mt-2 text-justify"
          style={{
            height: "6rem",
          }}
        >
          {article[`content_${props.lang}`][`intro_${props.lang}`]}
        </p>
        <a
          href={props.data.node.childMarkdownRemark.fields.slug}
          class="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <i class="fas fa-book-open mr-3"></i>
          {read_more[props.lang]}
        </a>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(ArticleCard)
