import React from 'react'
import { Text } from 'ui/base'

const Paragraph = props => (
  <Text
    as='p'
    mb={5}
    {...props}
  />
)

export default Paragraph