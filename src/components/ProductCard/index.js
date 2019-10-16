import React from "react"
import { Card } from "@rebass/emotion"
import { Flex, FluidImage, H6, Icon, Link } from "ui/base"

const ProductCard = ({ info, ...props }) => {
  const { fields, frontmatter } = info
  const { title, milk_type, image } = frontmatter
  const img = image.childImageSharp.fluid
  return (
    <Flex as={Link} to={fields.url} {...props}>
      <Card variant="product" width="100%">
        <Flex justifyContent="center" bg="lightBlue" py={3}>
          <FluidImage style={{ width: "90%" }} fluid={img} />
        </Flex>
        <Flex alignItems="center" py={3}>
          <Icon width="1.2rem" icon={milk_type} ml={3} mr={1} />
          <H6 fontWeight="600">{title}</H6>
        </Flex>
      </Card>
    </Flex>
  )
}

export default ProductCard
