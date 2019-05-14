import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  return (
    <div>
      {data.allMdx.edges.map(({ node }) => {
        const { frontmatter, fields, excerpt } = node
        return (
          <div key={node.id}>
            <Img fixed={frontmatter.image.childImageSharp.fixed} />
            <h3>
              <Link to={fields.url}>{frontmatter.title}</Link>
            </h3>
            <h5>{frontmatter.date}</h5>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default IndexPage

export const postsQuery = graphql`
  query postsQuery($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`
