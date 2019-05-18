import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import { Layout } from "ui/layouts"
import { H5, Flex, Section } from "ui/base"

const extensionMap = {
  png: "image",
  jpg: "image",
  jpeg: "image",
  ".mp4": "video"
}

const GalleryPage = ({ data }) => (
  <Layout>
    <Section>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {data.allFile.edges.map(({ node }) => {
          // Check node.extension to test if image or video, then render accordingly
          const mediaType = extensionMap[node.extension]
          return (
            <Flex
              flexBasis={["100%", "47.5%", "30%"]}
              flexDirection="column"
              alignItems="center"
            >
              <Img fixed={node.childImageSharp.fixed} />
              <H5 py={3} fontWeight="600">
                {mediaType}
              </H5>
            </Flex>
          )
        })}
      </Flex>
    </Section>
  </Layout>
)

export default GalleryPage

export const galleryQuery = graphql`
  query galleryPageQuery {
    allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
          extension
        }
      }
    }
  }
`
