import React from "react";
import { Image } from "next/image";
import svg from "public/icons/cow.svg";

const Cow = (props) => <Image src={svg} {...props} />;

export default Cow;
