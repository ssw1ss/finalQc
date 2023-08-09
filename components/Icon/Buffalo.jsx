import React from "react";
import { Image } from "next/image";
import svgsrc from "public/icons/buffalo.svg";

const Buffalo = (props) => <Image src={svgsrc} {...props} />;

export default Buffalo;
