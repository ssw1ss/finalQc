import React from "react"
import { graphql } from "gatsby"
import { Box } from "@rebass/emotion"

import { ArticlePreview } from "components"
import { Layout } from "ui/layouts"
import { Flex, Link, Section } from "ui/base"

const IndexPage = ({ data, pageContext: { skip, limit, numPages } }) => {
  const currentPage = skip / limit + 1
  const links = {
    prevLink: <div />,
    nextLink: <div />
  }
  if (currentPage === 1) {
    links.nextLink = <Link to={`/blog/page/${currentPage + 1}`}>Next Page</Link>
  } else if (currentPage === 2) {
    links.prevLink = <Link to={`/blog`}>Previous Page</Link>
    if (numPages !== 2) {
      links.nextLink = (
        <Link to={`/blog/page/${currentPage + 1}`}>Next Page</Link>
      )
    }
  } else if (currentPage === numPages) {
    links.prevLink = (
      <Link to={`/blog/page/${currentPage - 1}`}>Previous Page</Link>
    )
  }
  return (
    <Layout>
      <Section mb={10}>
        <Flex flexWrap="wrap" justifyContent="space-between">
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
        </Flex>
        <Flex justifyContent="space-between">
          <Box>{links.prevLink}</Box>
          <Box>{links.nextLink}</Box>
        </Flex>
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
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`
