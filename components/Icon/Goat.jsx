import React from "react";
import { Image } from "next/image";
import svg from "public/icons/goat.svg";

const Goat = (props) => <Image src={svg} {...props} />;

export default Goat;
