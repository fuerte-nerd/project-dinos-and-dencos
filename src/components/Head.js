/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Head({ description, lang, meta, title, og }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: og.description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:url`,
            content: og.url,
          },
          {
            property: `og:description`,
            content: og.description,
          },
          {
            property: `og:image`,
            content: site.siteMetadata.siteUrl + og.image,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
        ].concat(meta)}
      />
      <Helmet>
        {/*<link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Comfortaa|Spartan"
        />*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css"
        />
        <script
          src="https://kit.fontawesome.com/e6cbd84bc2.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
    </>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Head
