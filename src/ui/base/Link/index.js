import React from "react"
import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"
import { Link as LinkBase } from "@rebass/emotion"

const LinkEl = styled(LinkBase)`
  display: inline-block;
  text-decoration: none;
`
const Link = props => <LinkEl as={GatsbyLink} {...props} />

export default Link
