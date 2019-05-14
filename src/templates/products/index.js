import React from "react"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
import { graphql } from "gatsby"

import Client from "./Client"

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:8000/___graphql",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }),
  cache: new InMemoryCache()
})

const ProductsPage = ({ data }) => {
  return (
    <div>
      <ApolloProvider client={client}>
        <div style={{ padding: "100px 0" }}>
          <Client data={data} client={client} />
        </div>
      </ApolloProvider>
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
