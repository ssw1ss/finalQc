import React from "react"
import styled from "@emotion/styled"
import { Box, Flex as FlexBase, Text, Image } from "@rebass/emotion"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import { display } from "styled-system"

import { Tabs } from "components"
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
const Label = styled(Text)`
  cursor: pointer;
  color: #575757;
  display: inline-block;
  border-bottom: 2px solid transparent;
`
const historyTabs = [
  {
    label: "2011",
    content:
      "asdfksd afkj alksjd fkjs dlfkj sdklfj lskdj fklsj dfkljs dfklj sdkflj sdklfj klsdj flksj dfklj sdklfj slkdjf klsdjf lksj dfklj "
  },
  {
    label: "2012",
    content:
      "2 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2013",
    content:
      "3 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2014",
    content:
      "4 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2015",
    content:
      "5 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2016",
    content:
      "6 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2017",
    content:
      "7 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "2018",
    content:
      "8 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  }
]
const friendsTabs = [
  {
    label: "In U.S.A",
    content:
      "1 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  },
  {
    label: "In Switzerland",
    content:
      "2 Longer content goes here<br />Longer content goes here<br />Longer content goes here<br />"
  }
]

const AboutPage = () => (
  <Layout>
    <Section>
      <Flex justifyContent="center">
        <Image
          borderRadius="100%"
          mr={3}
          width="4.25rem"
          height="4.25rem"
          src={imgDaniel}
        />
        <Image
          borderRadius="100%"
          width="4.25rem"
          height="4.25rem"
          src={imgCaroline}
        />
      </Flex>
      <Text textAlign="center">
        <H1 fontSize={0} mt={4}>
          Hello / Hällo
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
          Quality Cheese is now in its 20th year of bringing the best Swiss
          cheeses to the U.S. When it comes to quality nothing and nobody
          matches our portfolio. Our commitment to quality has remained the same
          and always will, but there are certainly things that have changed. At
          first we relied exclusively on the outstanding selection of Rolf
          Beeler. Over the years, though, our network increased, our resourcing
          got deeper. This made us create our own line, the Caroline Hostettler
          Selection, in 2006.
        </Paragraph>
        <Paragraph>
          Our relationship with partners and cheese makers grew and evolved into
          friendships and we therefore became more aware of the ever changing
          task of artisanal cheese making – our focus was not just on quality
          anymore.
        </Paragraph>
      </Box>
    </Section>

    <Section mt={[7, 7, 8]} py={[7, 7, 8]} bg="lightBlue">
      <Flex
        width={["100%", "100%", "75%"]}
        mx="auto"
        display={["none", "none", "block"]}
      >
        <H1 textAlign="center">Our History</H1>
        <Tabs data={historyTabs}>
          {({ active, changeActive, tabs }) => {
            let tabContent
            let slides = tabs.map((tab, i) => {
              let activeClass = {}
              if (i === active) {
                activeClass = { borderColor: "#27F", color: "#222" }
                tabContent = tab.content
              }
              return (
                <Slide
                  key={i}
                  index={i}
                  onClick={() => changeActive(i)}
                  style={{ height: "30px" }}
                >
                  <Text textAlign="center">
                    <Label style={activeClass}>{tab.label}</Label>
                  </Text>
                </Slide>
              )
            })
            return (
              <Flex
                as={CarouselProvider}
                alignItems="center"
                flexDirection="column"
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={tabs.length}
                visibleSlides={5}
                mx="auto"
              >
                <Flex
                  mt={4}
                  alignItems="center"
                  width="100%"
                  style={{ maxWidth: "500px" }}
                >
                  <Button as={ButtonBack}>&lt;</Button>
                  <Box width="100%">
                    <Slider>{slides}</Slider>
                  </Box>
                  <Button as={ButtonNext}>&gt;</Button>
                </Flex>
                <Box mt={5} dangerouslySetInnerHTML={{ __html: tabContent }} />
              </Flex>
            )
          }}
        </Tabs>
      </Flex>
    </Section>

    <Section
      as={Flex}
      alignItems="center"
      flexDirection="column"
      py={[7, 7, 8]}
      bg="lightYellow"
    >
      <H1>Friends &amp; Partners</H1>
      <Tabs data={friendsTabs}>
        {({ active, changeActive, tabs }) => {
          let tabContent
          let tabLabels = tabs.map((tab, i) => {
            let activeClass
            if (i === active) {
              tabContent = tab.content
              activeClass = { borderColor: "#f32010", color: "#222" }
            }
            return (
              <Label
                ml={i ? 5 : 0}
                key={i}
                style={activeClass}
                onClick={() => changeActive(i)}
              >
                {tab.label}
              </Label>
            )
          })
          return (
            <>
              <Box mt={4}>{tabLabels}</Box>
              <Box mt={6} dangerouslySetInnerHTML={{ __html: tabContent }} />
            </>
          )
        }}
      </Tabs>
    </Section>
  </Layout>
)

export default AboutPage
