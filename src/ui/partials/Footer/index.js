import React from "react"
import { Box, Flex, Image } from "@rebass/emotion"
import { Icon, Section } from "ui/base"

import { NavLink } from "components"
import { links } from "ui/partials"
import footer from "res/images/footer.png"

const Footer = () => (
  <Section mt="auto" pt={9} justifyContent="center">
    <Flex alignItems="center" flexDirection="column">
      <Box>
        {links.map(({ label, url }, i) => (
          <NavLink to={url} key={i} px={2} mx={2} fontSize={4} color="darkGray">
            {label}
          </NavLink>
        ))}
      </Box>
      <Box color="#bbb" fontSize={4} my={5}>
        &copy; Copyright 2019 Quality Cheese Inc
      </Box>
    </Flex>
    <Image src={footer} />
  </Section>
)

export default Footer
