import React from "react"
import styled from "@emotion/styled"
import { Box } from "@rebass/emotion"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { H3, FluidImage, Link as LinkBase, Text } from "ui/base"

const Link = props => (
  <LinkBase style={{ borderBottom: "1px solid #27F" }} {...props} />
)
const DateHeading = styled(Text)`
  color: #999;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.925rem;
`

export const ArticlePreview = props => {
  const { date, image, title, excerpt, slug } = props
  const img = image.childImageSharp.fluid
  return (
    <Box mb={8} style={{ maxWidth: "700px" }}>
      <DateHeading>{date}</DateHeading>
      <H3 mb={3}>
        <LinkBase to={slug} color="black">
          {title}
        </LinkBase>
      </H3>

      <FluidImage fluid={img} />

      <Text my={4}>{excerpt}</Text>
      <Link to={slug}>Read More</Link>
    </Box>
  )
}

export const Article = props => {
  const { date, image, title, content } = props
  const img = image.childImageSharp.fluid
  return (
    <Box mb={7}>
      <DateHeading>{date}</DateHeading>
      <H3 mb={3}>{title}</H3>

      {/* <Box mb={2} style={{ borderRadius: "5px", overflow: "hidden" }}> */}
      <FluidImage fluid={img} />

      <Text mb={2}>
        <MDXRenderer>{content}</MDXRenderer>
      </Text>
    </Box>
  )
}
