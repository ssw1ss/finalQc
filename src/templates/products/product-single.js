import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Img from "gatsby-image"

import { Section } from "ui/base"
import { Layout } from "ui/layouts"

const SinglePost = ({ data: { mdx } }) => {
  const { title, milk_type, milk_treatment, image } = mdx.frontmatter
  return (
    <Layout>
      <Section>
        <Img fixed={image.childImageSharp.fixed} />
        <h1>{title}</h1>
        <h3>
          {milk_type}, {milk_treatment}
        </h3>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Section>
    </Layout>
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
