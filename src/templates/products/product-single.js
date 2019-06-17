import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { Section } from "ui/base"
import { Layout } from "ui/layouts"
import { Box, Card, Text } from "@rebass/emotion"
import { borders } from "styled-system"

const CardItem = styled(Box)`
  ${borders};
  &:last-child {
    border: none;
  }
`

const SinglePost = ({ data: { mdx } }) => {
  const { title, image, milk_type, milk_treatment, ...rest } = mdx.frontmatter
  console.log(rest)
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
      <Section my={7}>
        <Card variant="default" style={{ padding: "0" }}>
          {Object.entries(rest).map(([k, val], i) => {
            let key = k.charAt(0).toUpperCase() + k.slice(1)
            return (
              <CardItem key={i} borderBottom="1px solid #eee" py={2} px={5}>
                <Text style={{ display: "inline" }} pr={2} fontWeight={600}>
                  {key}:
                </Text>
                <Text style={{ display: "inline" }} fontWeight={400}>
                  {val}
                </Text>
              </CardItem>
            )
          })}
        </Card>
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
