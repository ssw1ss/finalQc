import React from "react";
import { Text as TextBase } from "@chakra-ui/react";

const Dropcap = (props: any) => (
  <TextBase
    as="span"
    color="#222"
    width="2.5rem"
    height="2.5rem"
    display="flex"
    background="#ffe600"
    borderRadius="3px"
    alignItems="center"
    justifyContent="center"
    float="left"
    mt="0.35rem"
    mr="0.5rem"
    fontSize="26px"
    fontWeight="700"
    {...props}
  />
);

const Text = ({ children, dropcap, ...props }: any) => {
  let content;
  if (dropcap) {
    content = (
      <>
        <Dropcap>{children.slice(0, 1)}</Dropcap>
        {children.slice(1)}
      </>
    );
  } else {
    content = children;
  }
  return (
    <TextBase color="brand.gray" fontSize={5} lineHeight="1.6" {...props}>
      {content}
    </TextBase>
  );
};

export default Text;
