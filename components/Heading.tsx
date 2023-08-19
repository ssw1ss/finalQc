import React from "react";
import { Heading } from "@chakra-ui/react";

export const H1 = (props: any) => (
  <Heading
    color="brand.black"
    as="h1"
    fontSize={[1, 0]}
    fontWeight="bold"
    {...props}
  />
);
export const H2 = (props: any) => (
  <Heading
    color="brand.black"
    as="h2"
    fontSize={1}
    fontWeight="bold"
    {...props}
  />
);
export const H3 = (props: any) => (
  <Heading
    color="brand.black"
    as="h3"
    fontSize={2}
    fontWeight="semibold"
    {...props}
  />
);
export const H4 = (props: any) => (
  <Heading
    color="brand.darkGray"
    as="h4"
    fontSize={3}
    fontWeight="semibold"
    {...props}
  />
);
export const H5 = (props: any) => (
  <Heading
    color="brand.darkGray"
    as="h5"
    fontSize={4}
    fontWeight="normal"
    {...props}
  />
);
export const H6 = (props: any) => (
  <Heading
    color="brand.darkGray"
    as="h6"
    fontSize={6}
    fontWeight="semibold"
    {...props}
  />
);
