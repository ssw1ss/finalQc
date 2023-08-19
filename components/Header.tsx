import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { links } from "utils/links";

import logo from "public/images/logo.svg";
import FBIcon from "public/icons/fb-icon.svg";
import IGIcon from "public/icons/ig-icon.svg";
import Section from "./Section";

const Menu = () => (
  <>
    {links.map(({ label, url }, i) => (
      <Link
        color="brand.gray"
        key={i}
        href={url}
        px={[2, 2, 3, 4]}
        fontSize={[5, 5, 5, 4]}
        transition="color .25s"
        sx={{
          _hover: {
            color: "brand.darkGray",
            textDecoration: "none",
          },
        }}
      >
        {label}
      </Link>
    ))}
  </>
);

const Header = ({ modal: { modalIsActive, setModalIsActive } }: any) => {
  const icon = modalIsActive ? "times" : "bars";
  return (
    <>
      <Flex bg="brand.yellow" py={2} justifyContent="center">
        <a
          href="http://www.adopt-an-alp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          COVID-19: Read Here
        </a>
      </Flex>
      <Section
        as={Flex}
        mt={3}
        mb={7}
        justifyContent="space-between"
        alignItems={["flex-start", "flex-start", "center"]}
      >
        <Box order={2} />
        <Box order={[2, 2, 1]}>
          <Link href="/">
            <Box width="10.5rem">
              <Image src={logo} alt="Quality Cheese" />
            </Box>
          </Link>
        </Box>
        <Box order={3} style={{ position: "relative" }}>
          <Box
            p={3}
            onClick={() => setModalIsActive((prevState: any) => !prevState)}
            display={["block", "block", "none"]}
            style={{
              position: "absolute",
              right: "0",
              zIndex: "100",
              cursor: "pointer",
            }}
          >
            <Text fontSize="2" color="darkGray">
              <FontAwesomeIcon icon={icon} />
            </Text>
          </Box>
          <Box display={["none", "none", "block"]}>
            <Flex>
              <Menu />
              <Flex ml={2}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/qualitycheese"
                >
                  <Image
                    src={FBIcon}
                    alt="Follow us on Facebook"
                    title="Follow us on Facebook"
                    style={{
                      width: "26px",
                      display: "inline-block",
                      margin: "0 .25rem",
                    }}
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/adoptanalp/">
                  <Image
                    src={IGIcon}
                    alt="Follow us on Instagram"
                    title="Follow us on Instagram"
                    style={{
                      width: "26px",
                      display: "inline-block",
                      margin: "0 .25rem",
                    }}
                  />
                </a>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default Header;
