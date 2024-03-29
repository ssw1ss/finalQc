import React from "react"
import { Box, Card, Flex as FlexBase, Image } from "@rebass/emotion"
import { display } from "styled-system"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { Layout } from "ui/layouts"
import { Button, H1, H5, Paragraph, Section, Text } from "ui/base"
import bigCheese from "res/images/Chardonnay-Truffle-Bio.png"
import foreverCheese from "res/images/forever-cheese.png"
import iconCheese from "res/images/icon-cheese.svg"
import iconAlp from "res/images/icon-alp.svg"

const Flex = styled(FlexBase)`
  ${display};
`
const yellowBG = css`
  position: relative;
  &:after {
    content: "";
    width: 33rem;
    height: 33rem;
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

const IndexPage = () => (
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
          For over 20 years, we've delivered the best cheeses from Switzerland
          to the U.S
        </H1>
        <Button mt={[4, 5, 6]} to="/about">
          Learn More
        </Button>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        fontSize=".9rem"
        width={["0", "0%", "28rem"]}
        css={yellowBG}
        display={["none", "none", "block"]}
      >
        <img src={bigCheese} />
      </Flex>
    </Section>
    <Section mt={9}>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box width={["100%", "100%", "55%"]}>
          <Paragraph dropcap>
            For over 2 decades, Quality Cheese has been the frontrunner when it
            comes to providing the American cheese market with some of the best
            Swiss cheeses. From the classics to specialty cheeses you've never
            heard of before, the products we exclusively resource and bring to
            the U.S reflect what our name promises.
          </Paragraph>
          <Paragraph>
            Over all these years Quality Cheese has established a network on
            both sides of the Atlantic Ocean. We work with cheesemakers that
            think outside the box, and knowing them personally has allowed us to
            resource outstanding, innovative products. On the other side working
            with the U.S. cheese market has connected us with a variety of
            customers: from top chefs, specialty cheese and gourmet shops to
            store chains that put an emphasis on quality.
          </Paragraph>
          <Paragraph>
            Out of the vastness of great Swiss cheeses we have picked those
            which are most beneficial to your health and are produced with
            respect towards the animals, the workers, and the environment.
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
            We Have A New Partner
          </Text>
          <Image
            mt={4}
            mx="auto"
            style={{ maxWidth: "300px", display: "block" }}
            src={foreverCheese}
          />
          <Text>
          As of July 2023 Forever Cheese is the new and exclusive import/distributor partner of Quality Cheese and InterCheese AG and replaces World's Best Cheeses.
          </Text>
        </Flex>
      </Flex>
    </Section>
    <Section mt={8} mb={3} py={8} bg="lightBlue">
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
            From the classics such as Gruyère and Sbrinz, to specialty cheeses
            you may not know, check out our detailed portfolio of the best
            cheeses from Switzerland
          </Text>
          <Box style={{ fontSize: ".75rem" }}>
            <Button mt={1} to="/products">
              View Products
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
            Adopt an Alp in Switzerland and support the transhumance movement,
            moving the livestock from one grazing ground to another, and get
            some delicious and healthy cheeses in the fall!
          </Text>
          <Box style={{ fontSize: ".75rem" }}>
            <Button as="a" href="http://www.adopt-an-alp.com/" mt={1}>
              Learn More
            </Button>
          </Box>
        </Card>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage
