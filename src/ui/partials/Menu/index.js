import React from "react"
import { Link } from "ui/base"

const Menu = ({ color }) => {
  let customColor = color || "blue"
  return (
    <>
      <Link color={customColor} to="/about">
        About
      </Link>
      <Link color={customColor} to="/products">
        Products
      </Link>
      <Link color={customColor} to="/health">
        Health
      </Link>
      <Link color={customColor} to="/blog">
        Blog
      </Link>
      <Link color={customColor} to="/gallery">
        Gallery
      </Link>
      <Link color={customColor} to="/contact">
        Contact
      </Link>
      {/* <Text color="lightGray">&copy; Copyright 2018 Quality Cheese Inc</Text> */}
    </>
  )
}

export default Menu
