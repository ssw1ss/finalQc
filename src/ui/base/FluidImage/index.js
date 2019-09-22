import React from "react"
import Img from "gatsby-image"

const FluidImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth
      }
    }
  }
  return <Img {...normalizedProps} />
  // and use FluidImage
}

export default FluidImage
