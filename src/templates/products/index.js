import React from "react"
// import { ApolloClient } from "apollo-client"
// import { createHttpLink } from "apollo-link-http"
// import { InMemoryCache } from "apollo-cache-inmemory"
// import { ApolloProvider } from "react-apollo"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"

// import Client from "./Client"

// const client = new ApolloClient({
//   link: createHttpLink({
//     uri: "http://localhost:8000/___graphql",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     }
//   }),
//   cache: new InMemoryCache()
// })

const ProductsPage = ({ data }) => {
  return (
    <div>
      <div style={{ background: "#ddd" }}>
        {data.allMdx.edges.map(({ node }) => {
          const { frontmatter, fields, excerpt } = node
          return (
            <div key={node.id}>
              <Img fixed={frontmatter.image.childImageSharp.fixed} />
              <h3>
                <Link to={fields.url}>{frontmatter.title}</Link>
              </h3>
              <h5>
                {frontmatter.milk_type}, {frontmatter.milk_treatment}
              </h5>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductsPage

export const productsQuery = graphql`
  query productsQuery($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { frontmatter: { type: { eq: "product" } } }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          ...ProductPreview
        }
      }
    }
  }
`
