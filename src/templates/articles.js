import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col, Button } from "reactstrap"
import tempImage from "../images/article.jpg"
import Layout from "../components/layout"
import MainArticleCard from "../components/MainArticleCard"
import ArticleCard from "../components/ArticleCard"
import LangConsts from "../components/LanguageConstants"

const Articles = props => {
  const tempData = {
    featured: {
      id: 1,
      slug: "slug1",
      title: "Post Title",
      languages: ["gb", "es", "it"],
      date: new Date(2020, 2, 6),
      author: "Harry",
      featured_image: tempImage,
      excerpt:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet officiis minus quasi voluptates optio adipisci. Maxime sed odio dolorum id quaerat eligendi perferendis labore?...",
    },
    other_stories: [
      {
        id: 2,
        slug: "slug2",
        title: "Post Title 2",
        languages: ["gb", "es", "it", "de"],
        date: new Date(2020, 2, 3),
        author: "Derek",
        featured_image: tempImage,
        excerpt:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet officiis minus quasi voluptates optio adipisci, praesentium reprehenderit, nobis libero animi. Maxime sed odio dolorum id quaerat eligendi perferendis labore?...",
      },
      {
        id: 3,
        slug: "slug3",
        title: "Post Title 3",
        languages: ["gb", "es"],
        date: new Date(2020, 2, 2),
        author: "John",
        featured_image: tempImage,
        excerpt:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet officiis minus quasi voluptates optio adipisci, praesentium reprehenderit, nobis libero animi. Maxime sed odio dolorum id quaerat eligendi perferendis labore?...",
      },
    ],
  }
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
      <Container>
        <h1>Articles</h1>
        <p className="lead">
          From shelter updates to useful dog-owner tip, you wll find it all
          here!
        </p>
        <div className="articles">
          <Row className="mb-4">
            <Col>
              <MainArticleCard data={tempData.featured} />
            </Col>
          </Row>
          <Row>
            {tempData.other_stories.map(i => {
              return (
                <Col lg={6} className="mb-2">
                  <ArticleCard data={i} />
                </Col>
              )
            })}
          </Row>
        </div>
        <div className="d-block text-center my-5">
          <Button color="primary" size="lg">
            <i className="fas fa-book mr-3"></i>Load more articles
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
})

export default connect(mapStateToProps)(Articles)
