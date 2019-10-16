import React from "react"
import styled from "@emotion/styled"
import { Box, Flex as FlexBase, Text, Image } from "@rebass/emotion"
import { display } from "styled-system"

import { Layout } from "ui/layouts"
import { H1, H5, Section, Paragraph } from "ui/base"
import imgDaniel from "res/images/daniel.png"
import imgCaroline from "res/images/caroline.png"

const Flex = styled(FlexBase)`
  ${display};
`

const Button = styled("button")`
  background: none;
  border: none;
  color: #575757;
  margin-top: -0.5rem;
  font-size: 1rem;
  &:disabled {
    opacity: 0.4;
  }
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
          width="4.25rem"
          mr={3}
          height="4.25rem"
          src={imgCaroline}
          alt="Caroline Hostettler of Quality Cheese"
        />
        <Image
          borderRadius="100%"
          width="4.25rem"
          height="4.25rem"
          src={imgDaniel}
          alt="Daniel Hostettler of Quality Cheese"
        />
      </Flex>
      <Text textAlign="center">
        <H1 fontSize={0} mt={4}>
          Hello / Hallo
        </H1>
        <H5 mt={3} style={{ maxWidth: "400px" }} mx="auto">
          We are Daniel and Caroline Hostettler, the owners of Quality Cheese
          Inc
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
      <Label href="www.intercheese.ch">InterCheese AG</Label>
      <Label href="www.wbcheese.com">World’s Best Cheeses</Label>
      <Label href="www.rolfbeeler.ch">Rolf Beeler</Label>
      <Label href="www.boncas.ch">Ueli Moser, bonCas AG</Label>
      <Label href="www.willischmid.ch">Willi Schmid, Städtlichäsi</Label>
      <Label href="www.cheesenet.ch">Sepp Barmettler, Stans</Label>
      <Label href="www.bodensee-kaese.ch">Bodensee-Käse AG</Label>
      <Label href="www.kaeserei-studer.ch">Käserei Studer, Hatswil</Label>
      <Label href="www.milchmanufaktur.ch">Milchmanufaktur Einsiedeln</Label>
      <Label href="www.oberbergkaeserei.ch">
        Franz Renggli, Bergkäserei Oberberg
      </Label>
      <Label href="www.kaeserei-marbach.ch">
        Bergkäserei Marbach, Entlebuch
      </Label>
      <Label href="www.hauser-authentique.ch">Patrick Hauser, Le Lieu</Label>
      <Label href="www.schmid-kaese.ch">Manfred Schmid, Adelboden</Label>
      <Label href="www.seilerkaese.ch		">Seiler Raclette, Sarnen</Label>
      <Label href="www.cheesesfromswitzerland.com">
        Switzerland Cheese Marketing
      </Label>
      <Label href="www.schweizeralpkaese.ch">Schweizer Alpkäse</Label>
      <Label href="www.stefanwiesner.ch">
        Chef Stefan Wiesner, Escholzmatt
      </Label>
      <Label href="www.publichistory.ch">Dominik Flammer</Label>
    </Section>
  </Layout>
)

export default AboutPage
