import React from "react";
import styled from "@emotion/styled";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { H1, H5, Section, Layout, Paragraph, Text, H2 } from "components";
import imgDaniel from "public/images/daniel.png";
import imgCaroline from "public/images/caroline.png";
import imgRocco from "public/images/rocco.png";

const Label = styled("a")`
  cursor: pointer;
  color: #575757;
  display: inline-block;
  text-decoration: none;
  font-size: 1.15rem;
  display: block;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
  &:hover {
    border-color: #f32010;
    color: #222;
  }
`;

const AboutPage = () => (
  <Layout>
    <Section>
      <Flex justifyContent="center">
        <Box borderRadius="100%" height="5rem" mr={4} width="5rem">
          <Image
            src={imgCaroline}
            alt="Caroline Hostettler of Quality Cheese"
          />
        </Box>
        <Box borderRadius="100%" height="5rem" width="5rem">
          <Image src={imgDaniel} alt="Daniel Hostettler of Quality Cheese" />
        </Box>
        <Box borderRadius="100%" height="5rem" ml={4} width="5rem">
          <Image
            src={imgRocco}
            alt="Rocco the family dog, taste tester of Quality Cheese"
          />
        </Box>
      </Flex>
      <Box textAlign="center">
        <H1 fontSize={0} mt={4}>
          Hello / Hallo
        </H1>
        <H5 mt={3} style={{ maxWidth: "400px" }} mx="auto">
          We are Daniel and Caroline Hostettler, the owners of Quality Cheese
          Inc, and thats our dog and taste tester Rocco
        </H5>
      </Box>
    </Section>

    <Section as={Flex} mt={7}>
      <Box width={["100%", "100%", "75%"]} mx="auto">
        <Paragraph dropcap>
          Quality Cheese was founded by Caroline Hostettler in December 1997 in
          order to bring the best Swiss cheeses to the US market. From the
          beginning the portfolio consisted of cheeses that were exceptional in
          quality and distinguishably different from the standard Swiss cheeses
          that were available in the US at that time. Max McCalman, “Dean of
          Cheese” and author of “Cheese - a Connaisseur's Guide to the World's
          Best” wrote: “Caroline Hostettler has singlehandedly raised the bar
          for artisan cheesemaking in the U.S.!”At first, Quality Cheese
          imported exclusively cheeses by affineur Rolf Beeler, but then in
          2006, in an ever growing market, we added the “Caroline Hostettler
          Line”.
        </Paragraph>

        <H2>Into the future with Forever Cheese!</H2>
        <Paragraph>
          After 25 years in business we have made the decision with our Swiss
          partner “InterCheese AG” to work exklusively with Forever Cheese as
          importer and distributor of the Quality Cheese Portfolio. We are
          absolutely delighted to have found a partner with an excellent name in
          the trade and are sure to finally be able to deliver our products to
          more places in the US market. Since we started in 1997 a lot has
          changed, we got more competitors, but we are still the only company
          with an air program in order to bring the soft cheeses fresh and safe
          to the U.S.
        </Paragraph>

        <Paragraph>
          In the past few years Quality Cheese has concentrated more and more on
          the health aspect of cheeses. Hence Caroline created the
          “Adopt-an-Alp”-program in 2013 in order to support transhumance, the
          moving of livestock from one grazing ground to another seasonally, and
          bring highly regarded and truly healthy Alpage cheeses (or Alpkäse)
          onto the U.S. market. These treasures are only made in the summer and
          in the fresh air and pristine pastures of the Swiss Alps and Jura
          mountain range.
        </Paragraph>
      </Box>
    </Section>

    <Section
      as={Flex}
      alignItems="center"
      flexDirection="column"
      mt={7}
      py={[7, 7, 8]}
      bg="lightYellow"
    >
      <H1 mb={7}>Friends &amp; Partners</H1>
      <Label target="_blank" href="https://www.intercheese.ch">
        InterCheese AG
      </Label>
      <Label target="_blank" href="https://www.rolfbeeler.ch">
        Rolf Beeler
      </Label>
      <Label target="_blank" href="https://www.boncas.ch">
        Ueli Moser, bonCas AG
      </Label>
      <Label target="_blank" href="https://www.willischmid.ch">
        Willi Schmid, Städtlichäsi
      </Label>
      <Label target="_blank" href="https://www.cheesenet.ch">
        Sepp Barmettler, Stans
      </Label>
      <Label target="_blank" href="https://www.bodensee-kaese.ch">
        Bodensee-Käse AG
      </Label>
      <Label target="_blank" href="https://www.kaeserei-studer.ch">
        Käserei Studer, Hatswil
      </Label>
      <Label target="_blank" href="https://www.milchmanufaktur.ch">
        Milchmanufaktur Einsiedeln
      </Label>
      <Label target="_blank" href="https://www.oberbergkaeserei.ch">
        Franz Renggli, Bergkäserei Oberberg
      </Label>
      <Label target="_blank" href="https://www.kaeserei-marbach.ch">
        Bergkäserei Marbach, Entlebuch
      </Label>
      <Label target="_blank" href="https://www.hauser-authentique.ch">
        Patrick Hauser, Le Lieu
      </Label>
      <Label target="_blank" href="https://www.schmid-kaese.ch">
        Manfred Schmid, Adelboden
      </Label>
      <Label target="_blank" href="https://www.seilerkaese.ch		">
        Seiler Raclette, Sarnen
      </Label>
      <Label target="_blank" href="https://www.cheesesfromswitzerland.com">
        Switzerland Cheese Marketing
      </Label>
      <Label target="_blank" href="https://www.schweizeralpkaese.ch">
        Schweizer Alpkäse
      </Label>
      <Label target="_blank" href="http://www.stefanwiesner.ch">
        Chef Stefan Wiesner, Escholzmatt
      </Label>
      <Label target="_blank" href="https://www.publichistory.ch">
        Dominik Flammer
      </Label>
    </Section>
  </Layout>
);

export default AboutPage;
