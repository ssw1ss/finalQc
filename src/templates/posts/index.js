import React from "react"
import { graphql } from "gatsby"
import { Box } from "@rebass/emotion"
import { ArticlePreview } from "components"
import { Layout } from "ui/layouts"
import { Section } from "ui/base"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Section mb={10}>
        <Box>
          {data.allMdx.edges.map(({ node }) => {
            const { id, frontmatter, fields, excerpt } = node
            const { date, title, image } = frontmatter
            return (
              <ArticlePreview
                key={id}
                date={date}
                image={image}
                title={title}
                excerpt={excerpt}
                slug={fields.url}
              />
            )
          })}
        </Box>
      </Section>
    </Layout>
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
