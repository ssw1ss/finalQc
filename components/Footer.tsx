import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { links } from "utils/links";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import footer from "public/images/footer.png";

const Footer = () => (
  <Box mt="auto" pt={9} justifyContent="center">
    <Flex alignItems="center" flexDirection="column">
      <Box>
        {links.map(({ label, url }, i) => (
          <Link href={url} key={i} px={2} mx={2} fontSize={4} color="darkGray">
            {label}
          </Link>
        ))}
      </Box>
      <Box color="#bbb" fontSize={4} my={5}>
        &copy; Copyright 2019 Quality Cheese Inc
      </Box>
    </Flex>
    <Image alt="Alpkase certified cheeses from Switzerland" src={footer} />
  </Box>
);

export default Footer;
