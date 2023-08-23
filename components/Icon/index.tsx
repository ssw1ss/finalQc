import React from "react";

const iconSrcMap = {
  Buffalo: {
    alt: "Buffalo Icon",
    src: "/icons/buffalo.svg",
  },
  Cow: {
    alt: "Cow Icon",
    src: "/icons/cow.svg",
  },
  Goat: {
    alt: "Goat Icon",
    src: "/icons/goat.svg",
  },
  Sheep: {
    alt: "Sheep Icon",
    src: "/icons/sheep.svg",
  },
  Pin: {
    alt: "Pin Icon",
    src: "/icons/pin.svg",
  },
  Phone: {
    alt: "Phone Icon",
    src: "/icons/phone.svg",
  },
} as const;

const Icon = ({ name, ...props }: any) => {
  const icon = iconSrcMap[name as keyof typeof iconSrcMap];
  return <img alt={icon.alt} src={icon.src} />;
};

export default Icon;
