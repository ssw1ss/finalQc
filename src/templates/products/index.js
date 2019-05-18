import React from "react"
import { graphql } from "gatsby"

import { Layout } from "ui/layouts"
import { Flex, Section } from "ui/base"
import { ProductCard } from "components"

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <Section mb={10}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          {data.allMdx.edges.map(({ node }) => {
            const { id, ...info } = node
            return (
              <ProductCard
                info={info}
                key={id}
                flexBasis={["100%", "47.5%", "30%"]}
                mb={6}
              />
            )
          })}
        </Flex>
      </Section>
    </Layout>
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
