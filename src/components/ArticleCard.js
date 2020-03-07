import React from "react"

import moment from "moment"

export default function ArticleCard({ data }) {
  return (
    <div class="ani article card text-dark">
      <div class="card-body">
        <h3 class="card-title font-weight-bold mb-0">{data.title}</h3>
        <div class="flags small">
          {data.languages.map(i => {
            return <i className={`flag-icon flag-icon-${i}`}></i>
          })}
        </div>
        <p class="d-inline-block mb-2 small bg-primary p-1 rounded text-light">
          <small>Posted on {moment(data.date).format("d MMMM YYYY")} by {data.author}</small>
        </p>
        <img src={data.featured_image} alt="Rafael" class="w-100 rounded d-block" />
        <p class="mt-2 text-justify">
          {data.excerpt}
        </p>
        <a
          href={`/articles/${data.slug}`}
          class="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <i class="fas fa-book-open mr-3"></i>Read more
        </a>
      </div>
    </div>
  )
}
