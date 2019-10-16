import React from "react"
import { Link as LinkBase } from "ui/base"
import styled from "@emotion/styled"

const LinkEl = styled(LinkBase)`
  color: ${({ theme }) => theme.colors.gray};
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

const NavLink = props => <LinkEl {...props} />

export default NavLink
