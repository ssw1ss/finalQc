import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Card, H3, Layout, Section, Paragraph } from "components";

const HealthPage = () => (
  <Layout>
    <Section mb={8} width={["100%", "100%", "75%"]} mx="auto">
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

    <Section mb={4}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Flex
          mb={7}
          pr={[0, 0, 4]}
          flexBasis={["100%", "100%", "47.5%"]}
          flexDirection="column"
        >
          <H3 mb={4}>The Goods &amp; Benefits</H3>
          <Card variant="flat" bg="brand.lightBlue">
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
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Cheese fights cancer
              </Text>
              <Text>
                It contains CLA (conjugated linoleic acid) and sphingolipids
                which are anti-carcinogenic compounds. Vitamin amounts are
                significantly higher in cheese compared to milk. Vitamin A by a
                factor of 5.4, Vitamin E by 4.8, B2 by 3.4 and B1 by 1.7.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                Cheese fights carries
              </Text>
              <Text>
                Still the most prevalent dental disease. Bacteria ferment sugar
                and starch which creates acids that attack the tooth enamel. A
                bite of (aged)cheese though brings pH rapidly to normal levels
                due to calcium and phosphorus.
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
          <Card variant="flat" bg="brand.lightYellow">
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                If you are lactose intolerant, you can’t eat cheese.
              </Text>
              <Text>
                Lactose is partly washed away with the whey and the rest
                fermented into lactic acid within 24 hours of ripening. All
                types of cheese except fresh and, in a few cases, soft cheese,
                are free of lactose. So are all buffalo milk cheeses.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                The trans fatty acids in cheese enhance the risk of coronary
                heart disease.
              </Text>
              <Text>
                Clinical studies show quite the opposite: trans fatty acids of
                ruminants do not alter the cholesterol, even a negative
                correlation has been observed in men and women. It is mostly
                unnatural trans fatty acids resulting from the incomplete
                hardening of vegetable oils that increase the risk of heart
                disease.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                If you want to lose weight with a low-energy-diet you should
                stay away from eating cheese.
              </Text>
              <Text>
                Again, the newest research shows different. In fact, overweight
                women seem the ones to profit mostly from a low-energy-diet that
                includes the consumption of (full-fat) cheeses. They also have a
                high satiety value.
              </Text>
            </Box>
            <Box mb={4}>
              <Text mb={1} fontWeight="600">
                People with high blood pressure should not consume diary
                products.
              </Text>
              <Text>
                In several studies dairy products have shown a beneficial effect
                on blood pressure, especially in mildly hypertensive subjects.
                Two main components seem to be relevant in this situation:
                calcium and bioactive peptides. Instead: Failure to ingest
                adequate amounts of dairy products increases the risk of
                hypertensive heart disease.
              </Text>
            </Box>
          </Card>
        </Flex>
      </Flex>
    </Section>
  </Layout>
);

// export const pageQuery = graphql`
//   query HealthPageQuery {
//     allMdx(filter: { frontmatter: { type: { eq: "post" } } }, limit: 3) {
//       edges {
//         node {
//           ...PostPreview
//         }
//       }
//     }
//   }
// `;

export default HealthPage;
