const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Add aliases for absolute imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        ui: path.resolve(__dirname, "src/ui"),
        res: path.resolve(__dirname, "src/res")
      }
    }
  })
}

const BLOG_PATH_PREFIX = "/blog"
const PRODUCTS_PATH_PREFIX = "/products"

const slugPrefixMap = {
  post: BLOG_PATH_PREFIX,
  product: PRODUCTS_PATH_PREFIX
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const { type } = node.frontmatter
    const slug = createFilePath({ node, getNode })
    const url = `${slugPrefixMap[type]}${slug}`
    createNodeField({
      name: "url",
      node,
      value: url
    })
    createNodeField({
      name: "type",
      node,
      value: type
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const ipp = 9 /* items per page */

  const posts = new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
          totalCount
          edges {
            node {
              id
              fields {
                url
              }
            }
          }
        }
      }
    `)
      .then(result => {
        // Create paginated blog (blog/2, blog/3 etc)
        const totalCount = result.data.allMdx.totalCount
        const numPages = Math.ceil(totalCount / ipp)
        Array.from({ length: numPages }).forEach((_, i) => {
          const currentPage = i + 1
          createPage({
            path:
              i === 0
                ? `${BLOG_PATH_PREFIX}`
                : `${BLOG_PATH_PREFIX}/page/${currentPage}`,
            component: path.resolve(`./src/templates/posts/index.js`),
            context: {
              limit: ipp,
              skip: i * ipp,
              numPages,
              totalCount
            }
          })
        })

        // Create pages for each individual post
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `${node.fields.url}`,
            component: path.resolve(`./src/templates/posts/post-single.js`),
            context: { id: node.id }
          })
        })
        resolve()
      })
      .catch(err => {
        console.log("GN error")
        reject(err)
      })
  })
  const products = new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(filter: { frontmatter: { type: { eq: "product" } } }) {
          totalCount
          edges {
            node {
              id
              fields {
                url
              }
            }
          }
        }
      }
    `)
      .then(result => {
        // const totalCount = result.data.allMdx.totalCount
        // const numPages = Math.ceil(totalCount / ipp)
        // Array.from({ length: numPages }).forEach((_, i) => {
        //   const currentPage = i + 1
        //   createPage({
        //     path:
        //       i === 0
        //         ? `${PRODUCTS_PATH_PREFIX}`
        //         : `${PRODUCTS_PATH_PREFIX}/page/${currentPage}`,
        //     component: path.resolve(`./src/templates/products/index.js`),
        //     context: {
        //       limit: ipp,
        //       skip: i * ipp,
        //       numPages,
        //       totalCount
        //     }
        //   })
        // })
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `${node.fields.url}`,
            component: path.resolve(
              `./src/templates/products/product-single.js`
            ),
            context: { id: node.id }
          })
        })
        resolve()
      })
      .catch(err => {
        console.log("GN error")
        reject(err)
      })
  })
  return Promise.all([posts, products])
}
