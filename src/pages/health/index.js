import React from "react"
import { graphql } from "gatsby"
import { Box, Card, Text } from "@rebass/emotion"

import { Layout } from "ui/layouts"
import { Flex, H1, H3, Section, Paragraph } from "ui/base"
import { ArticlePreview } from "components"

const HealthPage = ({ data }) => (
  <Layout>
    <Section mb={8}>
      <Paragraph dropcap>
        Cheese has a long history in the human diet. In ancient times, cheese
        was primarily a concentrated form of milk with the benefit of a
        prolonged shelf life. Recent advances in science have highlighted the
        contribution of cheese to nutrition and health. It is a rich source of
        essential nutrients; in particular proteins, bioactive peptides, amino
        acids, fat, fatty acids, vitamins and minerals. The high concentration
        of essential amino acids in cheese contributes to growth and development
        of the human body.
      </Paragraph>
      <Paragraph>
        Despite the presence of a notable amount of saturated and trans fatty
        acids, there is no evidence relating the consumption of cheese to any
        disease. Quite contrary: Conjugated linoleic acid and sphingolipids
        present in cheese may have anti-carcinogenic properties. The high
        concentration of calcium in cheese is well known to contribute to the
        formation and maintenance of strong bones and teeth, but also shows a
        positive effect on blood pressure and helps in loosing weight in
        combination with low-energy diets.
      </Paragraph>
    </Section>

    <Section mb={7}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Flex
          mb={7}
          pr={[0, 0, 4]}
          flexBasis={["100%", "100%", "47.5%"]}
          flexDirection="column"
        >
          <H3 mb={4}>The Goods &amp; Benefits</H3>
          <Card variant="flat" bg="lightBlue">
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Zinc &amp; Phosphorous
              </Text>
              <Text>
                Abundant in cheese, the amounts are higher in hard than soft
                cheeses. Zinc works as an activator for many enzymes, is
                important for storing Insulin and strengthens the immune system.
                Phosphorus is beneficial for bones & teeth.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Calcium
              </Text>
              <Text>
                Arguably the most important mineral in cheese. Adults should
                intake 1000mg, adolescents even 1200mg of calcium a day. 3.5 oz
                (100gr) of hard or semihard cheeses deliver the daily amount for
                an adult. Calcium is not only essential for the bones and teeth,
                it plays a major factor in the transmission of impulses in the
                nervous system.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Proteins
              </Text>
              <Text>
                Read this study about cheese and it’s effects on health, by
                Barbara Walther, Alexandra Schmid, Robert Sieber, Karin
                Wehrmuller
              </Text>
            </Box>
          </Card>
        </Flex>
        <Flex
          mb={7}
          flexBasis={["100%", "100%", "47.5%"]}
          flexDirection="column"
        >
          <H3 mb={4}>Debunking Myths</H3>
          <Card variant="flat" bg="lightYellow">
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Zinc &amp; Phosphorous
              </Text>
              <Text>
                Abundant in cheese, the amounts are higher in hard than soft
                cheeses. Zinc works as an activator for many enzymes, is
                important for storing Insulin and strengthens the immune system.
                Phosphorus is beneficial for bones & teeth.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Calcium
              </Text>
              <Text>
                Arguably the most important mineral in cheese. Adults should
                intake 1000mg, adolescents even 1200mg of calcium a day. 3.5 oz
                (100gr) of hard or semihard cheeses deliver the daily amount for
                an adult. Calcium is not only essential for the bones and teeth,
                it plays a major factor in the transmission of impulses in the
                nervous system.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Proteins
              </Text>
              <Text>
                Read this study about cheese and it’s effects on health, by
                Barbara Walther, Alexandra Schmid, Robert Sieber, Karin
                Wehrmuller
              </Text>
            </Box>
          </Card>
        </Flex>
      </Flex>
    </Section>

    <Section mb={10}>
      <H1 mb={6} textAlign="center">
        Related Articles
      </H1>
      <Box>
        {data.allMdx.edges.map(({ node }, i) => {
          let { id, excerpt, frontmatter, fields } = node
          let { title, image, date } = frontmatter
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

export const pageQuery = graphql`
  query HealthPageQuery {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }, limit: 3) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`

export default HealthPage
