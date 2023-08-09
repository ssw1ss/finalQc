import React from "react";

const Section = ({ className = "", ...props }: any) => (
  <div className={"text-blue max-w-full px-4 px-5" + className} {...props} />
);

export default Section;
