const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// The image path in markdown files will be 'assets/yourImage.jpg' so create this function to filter it through a regex to get just the filename
const getFilename = url => {
  return url.match(/(?<=\/).*/g)[0]
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const indexTemplate = path.resolve(`src/templates/index.js`)
  const theDogsTemplate = path.resolve(`src/templates/the-dogs.js`)
  const dogTemplate = path.resolve(`src/templates/dogTemplate.js`)
  const articlesTemplate = path.resolve("src/templates/articles.js")
  const articleTemplate = path.resolve("src/templates/article.js")
  const staticTemplate = path.resolve("src/templates/staticPage.js")

  const indexBgQuery = await graphql(`
    {
      file(sourceInstanceName: { eq: "content" }, name: { eq: "home" }) {
        childMarkdownRemark {
          frontmatter {
            background_image
          }
        }
      }
    }
  `)
  if (indexBgQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  createPage({
    path: "/",
    component: indexTemplate,
    context: {
      background_image: getFilename(
        indexBgQuery.data.file.childMarkdownRemark.frontmatter.background_image
      ),
    },
  })
  const dogImagesQuery = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "dogs" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                main_image
              }
            }
            id
          }
        }
      }
    }
  `)
  if (dogImagesQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  createPage({
    path: "/the-dogs",
    component: theDogsTemplate,
    context: {
      test: JSON.stringify(dogImagesQuery.data.allFile.edges),
    },
  })

  const dogsQuery = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "dogs" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  if (dogsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  dogsQuery.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: dogTemplate,
      context: {
        id: node.id,
      },
    })
  })
  createPage({
    path: "/articles",
    component: articlesTemplate,
    context: {},
  })
  const articlesQuery = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                featured_image
              }
            }
          }
        }
      }
    }
  `)
  if (articlesQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  articlesQuery.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: articleTemplate,
      context: {
        id: node.id,
        image: getFilename(node.childMarkdownRemark.frontmatter.featured_image),
      },
    })
  })
  const adoptQuery = await graphql(`
  file(name: {eq: "adopt"}) {
    childMarkdownRemark {
      frontmatter {
        background_image
        heading {
          de
          en
          es
          it
          fr
        }
        subheading {
          en
          fr
          de
          es
          it
        }
        main {
          en
          es
          de
          it
          fr
        }
      }
    }
  }
    `)
  if (adoptQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  createPage({
    path: "/adopt",
    component: staticTemplate,
  })
}
