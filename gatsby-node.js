const path = require("path")

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
      allFile(filter: {sourceInstanceName: {eq: "dogs"}}) {
        edges {
          node {
            childMarkdownRemark {
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
      test: JSON.stringify(dogImagesQuery.data.allFile.edges)
    }
  })
}
