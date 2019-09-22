import React from "react"
import { graphql } from "gatsby"
import { Box, Card, Flex as FlexBase, Image } from "@rebass/emotion"
import { display } from "styled-system"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { ArticlePreview } from "components"
import { Layout } from "ui/layouts"
import { Button, H1, H5, Link, Paragraph, Section, Text } from "ui/base"
import imgAlpenchili from "res/images/Alpenchili.png"
import imgWorkedWith from "res/images/worked-with.png"
import iconCheese from "res/images/icon-cheese.svg"
import iconAlp from "res/images/icon-alp.svg"

const Flex = styled(FlexBase)`
  ${display};
`
const yellowBG = css`
  position: relative;
  max-width: 350px;
  &:after {
    content: "";
    width: 180%;
    height: 180%;
    border-radius: 50%;
    background: linear-gradient(#fffced, #ffefb0);
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
`
const cardIcon = css`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -1.75rem);
  width: 3.5rem;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Section as={Flex} alignItems="center" justifyContent="space-between">
      <Flex
        flexDirection="column"
        alignItems={["center", "center", "flex-start"]}
        fontSize=".9rem"
        width={["100%", "100%", "55%"]}
      >
        <H1
          color="black"
          textAlign={["center", "center", "left"]}
          fontSize={[0, 0, 0, "2.15rem"]}
        >
          Bringing the best cheeses from Switzerland to the USA for over 20
          years
        </H1>
        <Button mt={[4, 5, 6]} to="/">
          Learn More
        </Button>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        fontSize=".9rem"
        width={["0", "0%", "40%"]}
        css={yellowBG}
        display={["none", "none", "block"]}
      >
        <Image width="100%" src={imgAlpenchili} />
      </Flex>
    </Section>
    <Section mt={9}>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box width={["100%", "100%", "55%"]}>
          <Paragraph dropcap>
            Fromage frais everyone loves. Monterey jack ricotta babybel.
            Monterey jack ricotta babybel parmesan cheese. Over the years we
            have kept on exploring and being fascinated by the health aspects of
            tradtionally made cheeses. In 2013 Caroline founded the Adopt-an-Alp
            program supporting transhumance, and cheeses that are more
            charcterful, tasty and healthy than any others. Adopt-an-Alp has
            been an unforeseen success. The program is growing, and soon, we
            will announce a surprising new part of the program.
          </Paragraph>
          <Paragraph>
            But that is not all. The Mountain meadow milk selection contains
            another jewel. Our partner InterCheese entered a collaboration with
            Michelin-starred chef Stefan Wiesner who calls himself an
            “Alchemist”. Check out this video and you will see why. Gault&Millau
            calls it “ECO Cuisine” or “Cuisine of the Future”.
          </Paragraph>
        </Box>
        <Flex
          width={["100%", "100%", "40%"]}
          display={["none", "none", "block"]}
          flexDirection="column"
        >
          <Text
            fontWeight="semibold"
            color="gray"
            style={{ letterSpacing: "1px", textTransform: "uppercase" }}
            textAlign="center"
          >
            Who We've Worked With
          </Text>
          <Image
            mt={4}
            mx="auto"
            style={{ maxWidth: "300px", display: "block" }}
            src={imgWorkedWith}
          />
        </Flex>
      </Flex>
    </Section>
    <Section mt={8} mb={9} py={7} bg="lightBlue">
      <Flex justifyContent="space-between" flexDirection={["column", "row"]}>
        <Card
          variant="default"
          p={6}
          width={["100%", "47.5%"]}
          style={{ position: "relative" }}
        >
          <Image src={iconCheese} css={cardIcon} />
          <H5 mb={1} fontWeight="600">
            Our Products
          </H5>
          <Text mb={2}>
            We distribute throughout the United States to restaurants, hotels
            and grocery stores. How can we help you?
          </Text>
          <Box style={{ fontSize: ".75rem" }}>
            <Button mt={1} to="/">
              Learn More
            </Button>
          </Box>
        </Card>
        <Card
          variant="default"
          p={6}
          mt={[7, 0]}
          width={["100%", "47.5%"]}
          style={{ position: "relative" }}
        >
          <Image src={iconAlp} css={cardIcon} />
          <H5 mb={1} fontWeight="600">
            Adopt An Alp
          </H5>
          <Text mb={2}>
            We distribute throughout the United States to restaurants, hotels
            and grocery stores. How can we help you?
          </Text>
          <Box style={{ fontSize: ".75rem" }}>
            <Button mt={1} to="/">
              Learn More
            </Button>
          </Box>
        </Card>
      </Flex>
    </Section>
    <Section mb={10}>
      <H1 textAlign="center" mb={7}>
        Latest Posts
      </H1>
      <Box width={["100%", "90%", "75%"]} mx="auto">
        {data.allMdx.edges.map(({ node }) => {
          let { id, excerpt, fields, frontmatter } = node
          let { title, date, image } = frontmatter
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

export const HomePageQuery = graphql`
  query homePageQuery {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }, limit: 3) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`

export default IndexPage
