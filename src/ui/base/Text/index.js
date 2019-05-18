import React from "react"
import { Text as TextBase } from "@rebass/emotion"
import styled from "@emotion/styled"

const Dropcap = styled.span`
  color: #222;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  background: #ffe600;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.5rem;
  font-size: 26px;
  font-weight: 700;
`

const Text = ({ children, dropcap, ...props }) => {
  let content
  if (dropcap) {
    content = (
      <>
        <Dropcap>{children.slice(0, 1)}</Dropcap>
        {children.slice(1)}
      </>
    )
  } else {
    content = children
  }
  return (
    <TextBase color="gray" fontSize={5} lineHeight="1.6" {...props}>
      {content}
    </TextBase>
  )
}

export default Text
