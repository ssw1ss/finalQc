import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Card, Layout, Paragraph, Text } from "components";
import Image from "next/image";

import bigCheese from "public/images/Chardonnay-Truffle-Bio.png";
import foreverCheese from "public/images/forever-cheese.png";
import petitVaccarinus from "public/images/petit-vaccarinus.png";
import iconCheese from "public/images/icon-cheese.svg";
import iconAlp from "public/images/icon-alp.svg";
import Button from "components/Button";
import Section from "components/Section";
import { H1, H3, H5 } from "components/Heading";

const cardIcon = {
  position: "absolute",
  top: "0%",
  left: "50%",
  transform: "translate(-50%, -1.75rem)",
  width: "3.5rem",
};

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
          textAlign={["center", "center", "left"]}
          fontSize={[0, 0, 0, "2.15rem"]}
        >
          For over 20 years, we've delivered the best cheeses from Switzerland
          to the U.S
        </H1>
        <Button href="/about" mt={[4, 5, 6]}>
          Learn More
        </Button>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        fontSize=".9rem"
        width={["0", "0%", "28rem"]}
        display={["none", "none", "block"]}
        className="yellowBG"
      >
        <Image alt="cheese icon" src={bigCheese} />
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
          <Box my={4} mx="auto" maxW="300px" display="block">
            <Image alt="Forever Cheese logo" src={foreverCheese} />
          </Box>
          <Text>
            As of July 2023 Forever Cheese is the new and exclusive
            import/distributor partner of Quality Cheese and InterCheese AG and
            replaces World's Best Cheeses.
          </Text>
        </Flex>
      </Flex>
    </Section>
    <Section mt={8} mb={3} py={8} bg="brand.lightBlue">
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "row", "row", "row", "row"]}
      >
        <Card
          p={6}
          width={["100%", "47.5%", "47.5%", "47.5%", "47.5%"]}
          position="relative"
        >
          <Box sx={cardIcon}>
            <Image alt="Cheese icon" src={iconCheese} />
          </Box>
          <H5 mb="1" fontWeight="600">
            Our Products
          </H5>
          <Text mb={2}>
            From the classics such as Gruyère and Sbrinz, to specialty cheeses
            you may not know, check out our detailed portfolio of the best
            cheeses from Switzerland
          </Text>
          <Box style={{ fontSize: ".75rem" }}>
            <Button href="/products" mt={1}>
              View Products
            </Button>
          </Box>
        </Card>
        <Card
          p={6}
          mt={[7, 0, 0, 0, 0]}
          width={["100%", "47.5%", "47.5%", "47.5%", "47.5%"]}
          position="relative"
        >
          <Box sx={cardIcon}>
            <Image alt="Alp icon" src={iconAlp} />
          </Box>
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
    <Section my={9}>
      <Flex flexDirection={["column", "column", "column", "column", "row"]}>
        <Box width={["100%", "100%", "100%", "100%", "60%"]}>
          <H3 pb={3}>It's that time of the year again!</H3>
          <Paragraph>
            Petit Vaccarinus is coming back to the US. This 60 days aged and
            thus legal for the American market version of classic Vacherin
            Mont-d'Or is produced for Quality Cheese Inc. and their Swiss
            partner InterCheese exclusively and imported by Forever Cheese only.
            So make sure to get your hands on a Petit Vaccarinus bearing this
            label only.
          </Paragraph>
          <Paragraph>
            “Hauser Authentique” started production on August 18, hence the
            first batches of this truly unique and wonderful cheese will be
            available in the US towards the end of October 2023. The official
            release festival of this year's Vacherin Mont-d'Or in Switzerland is
            September 23. The product undergoes rigorous weekly quality and
            safety controls implemented by the AOP which celebrates its 20th
            anniversary this year. Like Vacherin Mont d'Or, Petit Vaccarinus is
            a seasonal product and only available between September and March.
            For more info go to{" "}
            <a
              href="https://www.vacherin-montdor.ch/en/"
              style={{ color: "blue" }}
            >
              https://www.vacherin-montdor.ch/en/
            </a>
          </Paragraph>
        </Box>
        <Box width={["100%", "100%", "100%", "100%", "40%"]} px={[0, 0, 5]}>
          <Image
            alt="Petit Vaccarinus label"
            src={petitVaccarinus}
            style={{ width: "100%" }}
          />
        </Box>
      </Flex>
    </Section>
  </Layout>
);

export default IndexPage;
