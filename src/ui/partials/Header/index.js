import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box as BoxBase, Flex, Image, Text } from "@rebass/emotion"
import styled from "@emotion/styled"
import { display } from "styled-system"

import { Link, Section } from "ui/base"
import logo from "res/images/logo.svg"
import { links } from "ui/partials"
import { NavLink } from "components"

import FBIcon from "res/icons/fb-icon.svg"
import IGIcon from "res/icons/ig-icon.svg"

const Box = styled(BoxBase)`
  ${display};
`

const Menu = () => (
  <>
    {links.map(({ label, url }, i) => (
      <NavLink key={i} to={url} px={[2, 2, 3, 4]} fontSize={[5, 5, 5, 4]}>
        {label}
      </NavLink>
    ))}
  </>
)

const Header = ({ modal: { modalIsActive, setModalIsActive } }) => {
  const icon = modalIsActive ? "times" : "bars"
  return (
    <Section
      as={Flex}
      mt={3}
      mb={7}
      justifyContent="space-between"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Box order={2} />
      <Box order={[2, 2, 1]}>
        <Link to="/">
          <Image width="10.5rem" src={logo} alt="Quality Cheese" />
        </Link>
      </Box>
      <Box order={3} style={{ position: "relative" }}>
        <Box
          p={3}
          onClick={() => setModalIsActive(prevState => !prevState)}
          display={["block", "block", "none"]}
          style={{
            position: "absolute",
            right: "0",
            zIndex: "100",
            cursor: "pointer"
          }}
        >
          <Text fontSize={2} color="darkGray">
            <FontAwesomeIcon icon={icon} />
          </Text>
        </Box>
        <Box display={["none", "none", "block"]}>
          <Flex>
            <Menu />
            <Flex ml={2}>
              <a target="_blank" href="https://www.facebook.com/qualitycheese">
                <img
                  src={FBIcon}
                  alt="Follow us on Facebook"
                  title="Follow us on Facebook"
                  style={{
                    width: "26px",
                    display: "inline-block",
                    margin: "0 .25rem"
                  }}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/adoptanalp/">
                <img
                  src={IGIcon}
                  alt="Follow us on Instagram"
                  title="Follow us on Instagram"
                  style={{
                    width: "26px",
                    display: "inline-block",
                    margin: "0 .25rem"
                  }}
                />
              </a>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Section>
  )
}

export default Header
