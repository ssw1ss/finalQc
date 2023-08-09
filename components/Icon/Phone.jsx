import React from "react";
import { Image } from "next/image";
import svg from "public/icons/phone.svg";

const Phone = (props) => <Image src={svg} {...props} />;

export default Phone;
