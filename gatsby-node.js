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
        allProjectYaml {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  result.data.allProjectYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/pages/project.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
