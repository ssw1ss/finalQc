import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box as BoxBase, Flex, Image, Text } from "@rebass/emotion"
import styled from "@emotion/styled"
import { display } from "styled-system"

import { Link, Section } from "ui/base"
import logo from "res/images/logo.svg"
import { links } from "ui/partials"
import { NavLink } from "components"

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
          <Menu />
        </Box>
      </Box>
    </Section>
  )
}

export default Header
