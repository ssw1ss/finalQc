import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Img from "gatsby-image"

const SinglePost = ({ data: { mdx } }) => {
  const { frontmatter } = mdx
  return (
    <div>
      <Img fixed={frontmatter.image.childImageSharp.fixed} />
      <h3>{frontmatter.title}</h3>
      <h5>{frontmatter.date}</h5>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  )
}

export default SinglePost

export const postQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      ...PostFull
    }
  }
`
