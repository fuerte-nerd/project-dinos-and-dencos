import React from "react"

import moment from "moment"

import Layout from "../components/layout"

import Spacer from "../components/ContentSpacer"

import Link from "../components/Link"

import tempImage from "../images/article.jpg"

export default function Article() {
  const data = {
    id: 1,
    slug: "slug1",
    title: "Post Title",
    languages: ["gb", "es", "it"],
    date: new Date(2020, 2, 6),
    author: "Harry",
    featured_image: tempImage,
    intro:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet officiis minus quasi voluptates optio adipisci. Maxime sed odio dolorum id quaerat eligendi perferendis labore?",
    post:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non facilis consectetur sequi nostrum perferendis nemo aut tempore placeat impedit libero, alias id at consequuntur nam dolore quas laudantium neque odio repellat numquam consequatur. Atque est laboriosam magnam iure sint, eius accusamus reiciendis expedita voluptatibus quam facere, voluptatem quis recusandae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ratione architecto atque quibusdam! Beatae reiciendis iusto quae nostrum blanditiis fuga deleniti officiis eos dicta quos odio fugit corporis exercitationem officia velit voluptas ab accusamus, molestias laborum doloribus tempore architecto voluptatibus. Iusto distinctio nisi deserunt culpa minus eius ut tempore accusantium necessitatibus at eaque dolorem ex sunt blanditiis enim eum maiores dolores voluptatem inventore veniam quaerat, laboriosam assumenda. Dolores autem nobis fugiat excepturi, voluptatem tenetur voluptates vero dolore corrupti libero quia!</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla, aliquid architecto laborum nam temporibus iste rem sit laboriosam, modi, debitis incidunt possimus. Tempore rerum officia autem delectus a explicabo neque repudiandae sint eos, assumenda cum vol#uptatem alias nam quam accusantium dolore nostrum asperiores nihil.</p>",
  }
  return (
    <Layout title={data.title} showFooter={true}>
      <Spacer />
      <div class="min-vh-100">
        <Link
          to="articles"
          classes="btn btn-block btn-sm text-left rounded-0 btn-dark"
        >
          <i class="fas fa-arrow-left mr-1"></i> Back to articles
        </Link>
        <div class="jumbotron bg-transparent rounded-0 position-relative overflow-hidden p-5 my-0">
          <img
            src={data.featured_image}
            alt="Article pic"
            class="position-absolute w-100 animated fadeIn"
            style={{
              top: 0,
              left: 0,
              zIndex: -50,
            }}
          />
          <div class="animated fadeIn delay-1s d-flex justify-content-center">
            <div class="d-inline-block">
              <h1 class="font-weight-bold bg-primary-trans p-3 d-inline-block h2 mb-0 rounded-top rounded-right">
                {data.title}
              </h1>
              <div>
                <p class="bg-dark-trans p-1 px-3 d-inline-block mb-0 rounded-bottom small">
                  by {data.author} on {moment(data.date).format("d MMMM YYYY")}
                </p>
              </div>
              <div class="pt-3">
                <div class="post-social justify-content-start">
                  <a
                    href="http://www.facebook.com"
                    class="button button-small facebook mr-2"
                  >
                    <span class="icon">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                  </a>
                  <a
                    href="http://www.twitter.com"
                    class="button button-small twitter mr-2"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                  </a>
                  <a
                    href="http://www.whatsapp.com"
                    class="button button-small whatsapp"
                  >
                    <span class="icon">
                      <i class="fab fa-whatsapp"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light text-dark text-center p-4">
          <p class="lead container mb-0">{data.intro}</p>
        </div>
        <div class="article-content container py-4 extend-line-height">
          <div dangerouslySetInnerHTML={{ __html: data.post }} />
          <div class="text-center">
            <button class="btn btn-outline-light btn-lg">
              Read/Write Comments<i class="ml-3 far fa-comments"></i>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
