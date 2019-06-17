import React from "react"
import { Link } from "ui/base"
import { Box } from "@rebass/emotion"

const PaginationBar = ({ currentPage, pathPrefix, range, totalPages }) => {
  const breakpoint = Math.ceil(range / 2)
  const firstPage = currentPage <= breakpoint ? "" : ""
  return <Box>{linksArray}</Box>
}

export default PaginationBar
