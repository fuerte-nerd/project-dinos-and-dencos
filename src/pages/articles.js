import React from "react"
import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"

import MainArticleCard from "../components/MainArticleCard"
import ArticleCard from "../components/ArticleCard"

import tempImage from "../images/article.jpg"

export default function Articles() {
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
    <Layout title="Articles" showFooter={true}>
      <Spacer />
      <div className="container">
        <h1>Articles</h1>
        <p className="lead">
          From shelter updates to useful dog-owner tips, you wll find it all
          here!
        </p>
        <div className="articles">
          <div className="row mb-4">
            <div className="col">
              <MainArticleCard data={tempData.featured} />
            </div>
          </div>
          <div className="row">
            {tempData.other_stories.map(i => {
              return (
                <div className="col-lg-6 mb-2">
                  <ArticleCard data={i} />
                </div>
              )
            })}
          </div>
        </div>
        <div class="d-block text-center my-5">
          <button class="btn btn-primary btn-lg">
            <i class="fas fa-book mr-3"></i>Load more articles
          </button>
        </div>
      </div>
    </Layout>
  )
}
