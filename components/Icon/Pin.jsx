import React from "react";
import { Image } from "next/image";
import svg from "public/icons/pin.svg";

const Pin = (props) => <Image src={svg} {...props} />;

export default Pin;