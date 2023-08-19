import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

function Button(props: any) {
  return (
    <Box
      as={Link}
      bg="brand.blue"
      borderRadius="25px"
      color="brand.white"
      display="inline-block"
      fontSize={4}
      px={5}
      py={2}
      {...props}
    />
  );
}

Button.defaultProps = {};

export default Button;
