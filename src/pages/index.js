import React from "react"
import { graphql } from "gatsby"
import { Box, Card, Flex } from "@rebass/emotion"
import { ArticlePreview } from "components"
import { Layout } from "ui/layouts"
import { Button, H1, H5, Link, Paragraph, Section, Text } from "ui/base"

const IndexPage = ({ data }) => (
  <Layout>
    <Section as={Flex}>
      <Flex flexDirection="column" alignItems="center" fontSize=".9rem">
        <H1 color="black" textAlign="center">
          Bringing the best cheeses from Switzerland to the USA for over 20
          years
        </H1>
        <Button mt={4} to="/">
          Learn More
        </Button>
      </Flex>
    </Section>
    <Section mt={8}>
      <Paragraph dropcap>
        Fromage frais everyone loves. Monterey jack ricotta babybel. Monterey
        jack ricotta babybel parmesan cheese. Over the years we have kept on
        exploring and being fascinated by the health aspects of tradtionally
        made cheeses. In 2013 Caroline founded the Adopt-an-Alp program
        supporting transhumance, and cheeses that are more charcterful, tasty
        and healthy than any others. Adopt-an-Alp has been an unforeseen
        success. The program is growing, and soon, we will announce a surprising
        new part of the program.
      </Paragraph>
      <Paragraph>
        But that is not all. The Mountain meadow milk selection contains another
        jewel. Our partner InterCheese entered a collaboration with
        Michelin-starred chef Stefan Wiesner who calls himself an “Alchemist”.
        Check out this video and you will see why. Gault&Millau calls it “ECO
        Cuisine” or “Cuisine of the Future”.
      </Paragraph>
    </Section>
    <Section mt={8} mb={9} py={7} bg="lightBlue">
      <Card variant="default">
        <H5 mb={1} fontWeight="600">
          Our Products
        </H5>
        <Text mb={2}>
          We distribute throughout the United States to restaurants, hotels and
          grocery stores. How can we help you?
        </Text>
        <Link to="#" borderColor="blue">
          Browse Products
        </Link>
      </Card>
      <Card variant="default" mt={6}>
        <H5 mb={1} fontWeight="600">
          Adopt An Alp
        </H5>
        <Text mb={2}>
          We distribute throughout the United States to restaurants, hotels and
          grocery stores. How can we help you?
        </Text>
        <Link to="#" borderColor="blue">
          Learn More
        </Link>
      </Card>
    </Section>
    <Section mb={10}>
      <H1 textAlign="center" mb={6}>
        Latest Posts
      </H1>
      <Box>
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
