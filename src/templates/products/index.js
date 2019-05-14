import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { Query } from "react-apollo"
import gql from "graphql-tag"

const testQuery = gql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "product" } } }
      limit: 2
      skip: 1
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const ProductsPage = ({ data }) => {
  return (
    <div>
      <Query query={testQuery}>
        {({ data, loading, error }) => {
          if (loading) return <span>Loading...</span>
          if (error) return <p>{error.message}</p>
          return (
            <div>
              {data.allMdx.edges.map(({ node }) => (
                <h3>{node.frontmatter.title}</h3>
              ))}
            </div>
          )
        }}
      </Query>
      <div style={{ background: "#ddd", padding: "50px 0" }}>
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
