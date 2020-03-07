import React from "react"

import moment from "moment"

export default function MainArticleCard({ data }) {
  return (
    <div className="article ani card text-dark">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <p className="text-muted font-weight-bold small">Most recent</p>
            <h2 className="card-title font-weight-bold mb-0">{data.title}</h2>
            <div className="flags small">
              {data.languages.map(i => {
                return <i className={`flag-icon flag-icon-${i}`}></i>
              })}
            </div>
            <p className="d-inline-block mb-2 small bg-primary p-1 rounded text-light">
              <small>
                Posted {moment(data.date).format("d MMMM YYYY")} by{" "}
                {data.author}
              </small>
            </p>
            <img
              src={data.featured_image}
              alt="Temp Image"
              className="w-100 rounded d-lg-none mb-3 mb-lg-0"
            />
            <p className="text-justify">{data.excerpt}</p>
          </div>

          <div className="col-lg-6">
            <img
              src={data.featured_image}
              alt="Temp image"
              className="w-100 rounded d-none d-lg-inline-block"
            />
          </div>
        </div>
        <a
          href={`/articles/${data.slug}`}
          className="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <i className="fas fa-book-open mr-3"></i>Read more
        </a>
      </div>
    </div>
  )
}
