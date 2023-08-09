import React from "react";
import footer from "public/images/footer.png";
import Image from "next/image";
import { NavLink, Section } from "./index";
import { links } from "utils/links";

const Footer = () => (
  <Section className="mt-auto pt-32 justify-center">
    <div className="flex-col items-center">
      <div>
        {links.map(({ label, url }, i) => (
          <NavLink to={url} key={i} className="px-2 mx-2 text-lg text-darkGray">
            {label}
          </NavLink>
        ))}
      </div>
      <div className="text-gray-400 text-gray text-lg my-6">
        &copy; Copyright 2019 Quality Cheese Inc
      </div>
    </div>
    <Image alt="Alpkase certification from Switzerland" src={footer} />
  </Section>
);

export default Footer;
