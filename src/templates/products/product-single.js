import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { H1, H3, H4, H6, Flex, FluidImage, Section } from "ui/base"
import { Layout } from "ui/layouts"
import { Box, Card, Image, Text } from "@rebass/emotion"
import { borders } from "styled-system"
import { Content } from "components"

// import imgWBC from "res/images/wbc.png"
// <Image
//   borderRadius="100%"
//   width="5rem"
//   height="5rem"
//   src={imgWBC}
// />

const CardItem = styled(Box)`
  ${borders};
  font-size: 0.875rem;
  &:last-child {
    border: none;
  }
`
const cardTitle = css`
  color: #999;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const productInfoMap = {
  origin: "Certification",
  texture: "Texture",
  selection: "Selection",
  producer: "Producer",
  appearance: "Appearance",
  size: "Size",
  fidm: "Fat in Dry Matter",
  rennet: "Rennet",
  paste: "Paste",
  holes: "Holes",
  maturation: "Maturation",
  taste: "Taste",
  bestby: "Best By",
  ingredients: "Ingredients",
  allergen: "Allergens"
}

const SinglePost = ({ data: { mdx } }) => {
  const { title, image, milk_type, milk_treatment, ...rest } = mdx.frontmatter
  return (
    <Layout>
      <Section>
        <Flex
          width="100%"
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "60%"]}>
            <H1>{title}</H1>
            <H4 color="gray">
              {milk_type} Milk, {milk_treatment}
            </H4>
            <Box mt={5}>
              <FluidImage
                fluid={image.childImageSharp.fluid}
                css={{ border: "1px solid #eee" }}
              />
            </Box>
            <Content mt={5}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Content>
          </Box>
          <Box width={["100%", "100%", "35%"]}>
            <Card variant="default" mt={[7, 7, 0]}>
              <CardItem borderBottom="1px solid #eee" py={2} px={4}>
                <Text css={cardTitle} pr={2} fontWeight={600}>
                  Product Information
                </Text>
              </CardItem>
              {Object.entries(rest).map(([k, val], i) => {
                let key = productInfoMap[k]
                const cardItem =
                  k != "type" ? (
                    <CardItem
                      key={i}
                      borderBottom="1px solid #eee"
                      py={2}
                      px={4}
                    >
                      <Text
                        style={{ display: "inline" }}
                        pr={2}
                        fontWeight={600}
                      >
                        {key}:
                      </Text>
                      <Text style={{ display: "inline" }} fontWeight={400}>
                        {val}
                      </Text>
                    </CardItem>
                  ) : null
                return cardItem
              })}
            </Card>
          </Box>
        </Flex>
      </Section>
      <Section bg="lightBlue" mt={8} py={7}>
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "45%"]} mb={5}>
            <H1 mb={4}>Looking to buy this cheese?</H1>
            <Text>
              Whether you’re a restaurateur, business owner or just want to buy
              this for personal consumption, get in touch with the distributor.
              You can call them for sales, or find shops that carry what you’re
              looking for.
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]}>
            <Box>
              <a href="https://www.wbcheese.com/">
                <H4 my={2}>World's Best Cheese</H4>
              </a>
              <Flex
                mt={3}
                flexDirection={["column", "row"]}
                justifyContent="space-between"
              >
                <Box width={["100%", "45%"]}>
                  <H6 mb={3}>East Coast Location</H6>
                  <Flex fontSize={6} mb={3}>
                    <Box mr={2} color="blue">
                      <FontAwesomeIcon icon="map-marker-alt" />
                    </Box>
                    <Text>111 Business Park Drive Armonk, NY 10504</Text>
                  </Flex>
                  <Flex fontSize={6}>
                    <Box mr={2} color="blue">
                      <FontAwesomeIcon icon="phone" />
                    </Box>
                    <Text>1-800 WB-CHEESE</Text>
                  </Flex>
                </Box>
                <Box width={["100%", "45%"]} mt={[5, 0]}>
                  <H6 mb={2}>West Coast Location</H6>
                  <Flex fontSize={6} mb={3}>
                    <Box mr={2} color="blue">
                      <FontAwesomeIcon icon="map-marker-alt" />
                    </Box>
                    <Text>2200 North Loop Road Alameda, CA 94502</Text>
                  </Flex>
                  <Flex fontSize={6}>
                    <Box mr={2} color="blue">
                      <FontAwesomeIcon icon="phone" />
                    </Box>
                    <Text>1-800-477-5262</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box mt={6}>
              <a href="https://aniata.com/">
                <H4 my={2}>The Aniata Cheese Company</H4>
              </a>

              <Box>
                <Flex fontSize={6} mb={3}>
                  <Box mr={2} color="blue">
                    <FontAwesomeIcon icon="map-marker-alt" />
                  </Box>
                  <Text>2332 La Mirada Drive, Suite 1000 Vista, CA 92081</Text>
                </Flex>
                <Flex fontSize={6}>
                  <Box mr={2} color="blue">
                    <FontAwesomeIcon icon="phone" />
                  </Box>
                  <Text>1-760-599-0151</Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
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
