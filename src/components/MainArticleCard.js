import React from "react"
import { connect } from "react-redux"
import moment from "moment"
import Link from "./Link"
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"
import LangConsts from "./LanguageConstants"

function MainArticleCard(props) {
  return (
    <Card className="article ani text-dark">
      <CardBody>
        <Row>
          <Col lg={6}>
            <p className="text-muted font-weight-bold small">
              {LangConsts.most_recent[props.lang]}
            </p>
            <CardTitle className="h2 mb-0">{props.data.title}</CardTitle>
            <div className="flags small">
              {props.data.languages.map(i => {
                return <i className={`flag-icon flag-icon-${i}`}></i>
              })}
            </div>
            <p className="d-inline-block mb-2 small bg-primary p-1 rounded text-light">
              <small>{moment(props.data.date).format("d MMMM YYYY")}</small>
            </p>
            <img
              src={props.data.featured_image}
              alt="Temp"
              className="w-100 rounded d-lg-none mb-3 mb-lg-0"
            />
            <p className="text-justify">{props.data.excerpt}</p>
          </Col>

          <Col lg={6}>
            <img
              src={props.data.featured_image}
              alt="Temp1"
              className="w-100 rounded d-none d-lg-inline-block"
            />
          </Col>
        </Row>
        <Link
          to={`/articles/${props.data.slug}`}
          classes="btn btn-success d-block stretched-link mt-lg-1 font-weight-bold"
        >
          <i className="fas fa-book-open mr-3"></i>
          {LangConsts.read_more[props.lang]}
        </Link>
      </CardBody>
    </Card>
  )
}
const mapStateToProps = state => ({
  lang: state.language.lang,
})
export default connect(mapStateToProps)(MainArticleCard)
