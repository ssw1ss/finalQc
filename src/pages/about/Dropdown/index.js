import styled from '@emotion/styled'
import { Box, Card } from '@rebass/emotion'

export const Dropdown = styled(Box)`
  position: relative;
`
export const DropdownPanel = styled(Card)`
  position: absolute;
  padding: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: .25rem;
`
DropdownPanel.defaultProps = {
  variant: "default"
}
export const DropdownLabel = styled(Box)`
  cursor: pointer;
  padding: .25rem 1.25rem;
  &:hover {
    background: #eee;
  }
  &:first-of-type {
    padding-top: .5rem;
  }
  &:last-of-type {
    padding-bottom: .5rem;
  }
`