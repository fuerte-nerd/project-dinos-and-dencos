import React from "react"
import LangConsts from "./LanguageConstants"
import moment from "moment"
import Link from "./Link"
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"

export default function MainArticleCard({ data }) {
  return (
    <Card className="article ani card text-dark">
      <CardBody className="card-body">
        <Row className="row">
          <Col lg={6}>
            <p className="text-muted font-weight-bold small">Most recent</p>
            <CardTitle className="font-weight-bold mb-0">
              {data.title}
            </CardTitle>
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
              alt="Temp"
              className="w-100 rounded d-lg-none mb-3 mb-lg-0"
            />
            <p className="text-justify">{data.excerpt}</p>
          </Col>

          <Col lg={6}>
            <img
              src={data.featured_image}
              alt="Temp1"
              className="w-100 rounded d-none d-lg-inline-block"
            />
          </Col>
        </Row>
        <Link
          to={`/articles/${data.slug}`}
          classes="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <i className="fas fa-book-open mr-3"></i>Read more
        </Link>
      </CardBody>
    </Card>
  )
}
