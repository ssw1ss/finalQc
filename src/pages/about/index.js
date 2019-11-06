import React from "react"
import styled from "@emotion/styled"
import { Box, Flex as FlexBase, Text, Image } from "@rebass/emotion"
import { display } from "styled-system"

import { Layout } from "ui/layouts"
import { H1, H5, Section, Paragraph } from "ui/base"
import imgDaniel from "res/images/daniel.png"
import imgCaroline from "res/images/caroline.png"
import imgRocco from "res/images/rocco.png"

const Flex = styled(FlexBase)`
  ${display};
`
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
`

const AboutPage = () => (
  <Layout>
    <Section>
      <Flex justifyContent="center">
        <Image
          borderRadius="100%"
          width="5rem"
          mr={4}
          height="5rem"
          src={imgCaroline}
          alt="Caroline Hostettler of Quality Cheese"
        />
        <Image
          borderRadius="100%"
          width="5rem"
          height="5rem"
          src={imgDaniel}
          alt="Daniel Hostettler of Quality Cheese"
        />
        <Image
          borderRadius="100%"
          width="5rem"
          height="5rem"
          src={imgRocco}
          ml={4}
          alt="Rocco the family dog, taste tester of Quality Cheese"
        />
      </Flex>
      <Text textAlign="center">
        <H1 fontSize={0} mt={4}>
          Hello / Hallo
        </H1>
        <H5 mt={3} style={{ maxWidth: "400px" }} mx="auto">
          We are Daniel and Caroline Hostettler, the owners of Quality Cheese
          Inc, and thats our dog and taste tester Rocco
        </H5>
      </Text>
    </Section>

    <Section as={Flex} mt={7}>
      <Box width={["100%", "100%", "75%"]} mx="auto">
        <Paragraph dropcap>
          Quality Cheese was founded by Caroline Hostettler in December 1997 in
          order to bring the best Swiss cheeses to the US market. From the
          beginning the portfolio consisted of cheeses that were exceptional in
          quality and distinguishably different from the standard Swiss cheeses
          that were available in the US at that time. Max McCalman, “Dean of
          Cheese” and author of “Cheese - a Connaisseur’s Guide to the World’s
          Best” wrote: “Caroline Hostettler has singlehandedly raised the bar
          for artisan cheesemaking in the U.S.!”
        </Paragraph>

        <Paragraph>
          At first, Quality Cheese imported exclusively cheeses by affineur Rolf
          Beeler, but then in 2006, in an ever growing market, we added the
          “Caroline Hostettler Line”. The same year we choose Crystal Food
          Imports as our US partner which has since become “World’s Best
          Cheeses”. Over the past 20 years in business a lot has changed. We got
          competitors, but we are still the only company with an air program in
          order to bring the soft cheeses fresh and safe to the U.S.
        </Paragraph>

        <Paragraph>
          In the past few years Quality Cheese has concentrated more and more on
          the health aspect of cheeses. Hence Caroline created the
          “Adopt-an-Alp”-program in 2013 in order to support transhumance, the
          moving of livestock from one grazing ground to another seasonally, and
          bring highly regarded and truly healthy Alpage cheeses (or Alpkäse) on
          the market. These treasures are only made in the summer and in the
          fresh air of the Swiss Alp and Jura mountain range.
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
      <Label target="_blank" href="https://www.wbcheese.com">
        World’s Best Cheeses
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
)

export default AboutPage
