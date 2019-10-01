const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ProjectYaml`) {
    const slug = createFilePath({ node, getNode, basePath: 'data/project' })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
  if (node.internal.type === `DataYaml`) {
    const slug = createFilePath({ node, getNode, basePath: 'data' })

    createNodeField({
      node,
      name: `slug`,
      value: slug.split('/').join('')
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
      query {
        allProjectYaml(sort: {fields: order}) {
          edges {
            node {
              title
              fields {
                slug
              }
              image {
                childImageSharp {
                  fixed(width: 1000) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const posts = result.data.allProjectYaml.edges;

  const getAdjacent = index => {
    if (index < 0 || index >= posts.length) {
      return null
    }

    const { title, fields, image } = posts[index].node;

    return {
      title,
      slug: fields.slug,
      image: image.childImageSharp.fixed.src
    }
  }

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/pages/project.js`),
      context: {
        slug: node.fields.slug,
        prev: getAdjacent(index - 1),
        next: getAdjacent(index + 1)
      },
    })
  })
}
