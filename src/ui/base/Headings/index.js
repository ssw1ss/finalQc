import React from "react"
import { Heading } from "@rebass/emotion"

export const H1 = props => (
  <Heading
    color="black"
    as="h1"
    fontSize={[1, 0]}
    fontWeight="bold"
    {...props}
  />
)
export const H2 = props => (
  <Heading color="black" as="h2" fontSize={1} fontWeight="bold" {...props} />
)
export const H3 = props => (
  <Heading
    color="black"
    as="h3"
    fontSize={2}
    fontWeight="semibold"
    {...props}
  />
)
export const H4 = props => (
  <Heading
    color="darkGray"
    as="h4"
    fontSize={3}
    fontWeight="semibold"
    {...props}
  />
)
export const H5 = props => (
  <Heading
    color="darkGray"
    as="h5"
    fontSize={4}
    fontWeight="normal"
    {...props}
  />
)
export const H6 = props => (
  <Heading
    color="darkGray"
    as="h6"
    fontSize={6}
    fontWeight="semibold"
    {...props}
  />
)
