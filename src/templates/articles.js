import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
import MainArticleCard from "../components/MainArticleCard"
import ArticleCard from "../components/ArticleCard"
import LangConsts from "../components/LanguageConstants"
import BannerHead from "../components/BannerHead"

const Articles = props => {
  const featuredArticle = props.data.articles.edges[0].node
  const otherArticles = props.data.articles.edges.filter((i, ind) => {
    if (ind > 0) {
      return i.node
    } else {
      return null
    }
  })
  return (
    <Layout
      title="Articles"
      showFooter={true}
      og={{
        description: "This is the description",
        image: "imagePath",
        url: "theurl",
      }}
      spacer={true}
    >
      <BannerHead
        heading={
          props.data.labels.childMarkdownRemark.frontmatter.articles[props.lang]
        }
        subheading="Sit doloremque provident fugit doloremque culpa quae consequuntur!
      Voluptate non vel obcaecati harum sunt. Dignissimos."
      />

      <Container>
        <div className="articles">
          <Row className="mb-4">
            <Col>
              <MainArticleCard data={featuredArticle} />
            </Col>
          </Row>
          <Row>
            {otherArticles.map(i => {
              return (
                <Col lg={6} className="mb-2">
                  <ArticleCard data={i} />
                </Col>
              )
            })}
          </Row>
        </div>
        <div className="d-block text-center my-5">
          {props.data.articles.edges.length > 8 ? (
            <Button color="primary" size="lg">
              <i className="fas fa-book mr-3"></i>
              {LangConsts.show_articles_archive[props.lang]}
            </Button>
          ) : (
            <p>{LangConsts.no_more_articles[props.lang]}</p>
          )}
        </div>
      </Container>
    </Layout>
  )
}

export const articlesData = graphql`
  query {
    articles: allFile(
      filter: { sourceInstanceName: { eq: "articles" } }
      limit: 8
      sort: { order: DESC, fields: childMarkdownRemark___frontmatter___date }
    ) {
      edges {
        node {
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              date
              featured_image
              content_de {
                body_de
                title_de
                intro_de
              }
              content_en {
                title_en
                intro_en
                body_en
              }
              content_es {
                body_es
                title_es
                intro_es
              }
              content_fr {
                body_fr
                title_fr
                intro_fr
              }
              content_it {
                title_it
                body_it
                intro_it
              }
              tags
            }
          }
        }
      }
    }
    labels: file(name: { eq: "labels" }) {
      childMarkdownRemark {
        frontmatter {
          articles {
            en
            it
            de
            es
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

export default connect(mapStateToProps)(Articles)
