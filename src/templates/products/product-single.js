import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Img from "gatsby-image"

const SinglePost = ({ data: { mdx } }) => {
  const { title, milk_type, milk_treatment, image } = mdx.frontmatter
  return (
    <div>
      <Img fixed={image.childImageSharp.fixed} />
      <h1>{title}</h1>
      <h3>{`${milk_type}, ${milk_treatment}`}</h3>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
  )
}

export default SinglePost

export const postQuery = graphql`
  query productQuery($id: String) {
    mdx(id: { eq: $id }) {
      ...ProductFull
    }
  }
`
