import React from "react";
import { Image } from "next/image";
import svg from "public/icons/sheep.svg";

const Sheep = (props) => <Image src={svg} {...props} />;

export default Sheep;
