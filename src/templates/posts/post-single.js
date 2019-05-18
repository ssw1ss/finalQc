import React from "react"
import { graphql } from "gatsby"

import { Layout } from "ui/layouts"
import { Section } from "ui/base"
import { Article } from "components"

const SinglePost = ({ data: { mdx } }) => {
  const { frontmatter } = mdx
  const { date, image, title } = frontmatter
  return (
    <Layout>
      <Section>
        <Article
          date={date}
          image={image}
          title={title}
          content={mdx.code.body}
        />
      </Section>
    </Layout>
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
