import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Flex, Image, Text } from '@rebass/emotion'

import { Section } from 'ui/base'
import logo from 'res/images/logo.svg'

const Header = () => (
  <Section as={Flex} mt={3} mb={7} justifyContent="space-between">
    <Box />
    <Box>
      <Link to="/">
        <Image width="10.5rem" src={logo} alt="Quality Cheese" />
      </Link>
    </Box>
    <Box>
      <Text fontSize={2} color="darkGray">
        <FontAwesomeIcon icon="bars" />
      </Text>
    </Box>
  </Section>
)

export default Header
