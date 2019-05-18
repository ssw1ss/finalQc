import { Button as ButtonBase } from '@rebass/emotion'
import styled from '@emotion/styled'
import { borders } from 'styled-system'
import Link from 'ui/base/Link'

const Button = styled(ButtonBase)`
  ${borders}
`

Button.defaultProps = {
  as: Link,
  bg: 'blue',
  borderRadius: '25px',
  color: 'white',
  fontSize: 4,
  px: 5,
  py: 2
}

export default Button