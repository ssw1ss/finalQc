import React from "react";
import { default as LinkEl } from "next/link";

const Link = (props: any) => (
  <LinkEl className="inline-block no-underline" {...props} />
);

export default Link;
