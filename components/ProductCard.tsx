import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Card, H6, Icon } from "components";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ info, ...props }: any) => {
  const {
    data: { title, milk_type, image },
  } = info;
  return (
    <Flex {...props}>
      <Card as={Link} href="/" variant="product" width="100%">
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="brand.lightBlue"
          p={3}
          sx={{
            position: "relative",
            height: "320px",
            overflow: "hidden",
          }}
        >
          <Box position="absolute">
            <Image alt={title} src={image} width="400" height="320" />
          </Box>
        </Flex>
        <Flex alignItems="center" py={3}>
          <Box width="1.2rem" ml={3} mr={1}>
            <Icon name={milk_type} />
          </Box>
          <H6 fontWeight="600">{title}</H6>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ProductCard;
