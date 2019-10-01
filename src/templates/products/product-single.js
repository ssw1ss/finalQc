import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { H1, H3, H4, H6, Flex, FluidImage, Link, Section } from "ui/base"
import { Layout } from "ui/layouts"
import { Box, Card, Image, Text } from "@rebass/emotion"
import { borders } from "styled-system"
import { Content } from "components"

import imgWBC from "res/images/wbc.png"

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
const yellowBG = css`
  position: relative;
  max-width: 350px;
  @media (min-width: 800px) {
    &:after {
      content: "";
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      background: linear-gradient(#fffced, #ffefb0);
      position: absolute;
      z-index: -1;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
    }
  }
`

const productInfoMap = {
  origin: "Origin",
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
  console.log(rest)
  return (
    <Layout>
      <Section>
        <Flex
          width="100%"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent={["auto", "auto", "space-between"]}
        >
          <Box my={3}>
            <H1 textAlign={["center", "center", "left"]}>{title}</H1>
            <H4 textAlign={["center", "center", "left"]} color="gray">
              {milk_type} Milk, {milk_treatment}
            </H4>
          </Box>
          <Box css={yellowBG} width={["100%", "100%", "60%"]} mb={5}>
            <FluidImage
              fluid={image.childImageSharp.fluid}
              css={{ border: "1px solid #eee" }}
            />
          </Box>
        </Flex>
        <Flex
          width="100%"
          flexDirection={["column", "column", "row"]}
          justifyContent={["auto", "auto", "space-between"]}
          alignItems="flex-start"
        >
          <Content width={["100%", "100%", "60%"]}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Content>
          <Card
            variant="default"
            width={["100%", "100%", "35%"]}
            mt={[3, 4, 7]}
          >
            <CardItem borderBottom="1px solid #eee" py={2} px={4}>
              <Text css={cardTitle} pr={2} fontWeight={600}>
                Product Information
              </Text>
            </CardItem>
            {Object.entries(rest).map(([k, val], i) => {
              let key = productInfoMap[k]
              const cardItem =
                k != "type" ? (
                  <CardItem key={i} borderBottom="1px solid #eee" py={2} px={4}>
                    <Text style={{ display: "inline" }} pr={2} fontWeight={600}>
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
              Whether you’re a restauranteur, business owner or just want to buy
              this for personal consumption (we understand), get in touch with
              the distributor. You can call them for sales, or find shops that
              carry what you’re looking for.
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]}>
            <Flex justifyContent="flex-start" alignItems="center">
              <Box pr={4}>
                <Text>Alpenchili is distributed by:</Text>
                <H3 my={2}>World's Best Cheese</H3>
                <Link>Visit World's Best Cheese</Link>
              </Box>
              <Image
                borderRadius="100%"
                width="5rem"
                height="5rem"
                src={imgWBC}
              />
            </Flex>
            <Flex
              mt={6}
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
