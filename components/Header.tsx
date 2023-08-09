import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { NavLink, Text, Link, Section } from "components";
import { links } from "utils/links";

import logo from "public/images/logo.svg";
import FBIcon from "public/icons/fb-icon.svg";
import IGIcon from "public/icons/ig-icon.svg";

const Menu = () => (
  <>
    {links.map(({ label, url }, i) => (
      <NavLink key={i} to={url} className="px-2 text-lg">
        {label}
      </NavLink>
    ))}
  </>
);

const Header = ({ modal: { modalIsActive, setModalIsActive } }: any) => {
  const icon = modalIsActive ? "times" : "bars";
  return (
    <>
      <div className="flex bg-yellow py-2 justify-center">
        <a
          href="http://www.adopt-an-alp.com/"
          style={{ textDecoration: "none", color: "black" }}
        >
          COVID-19: Read Here
        </a>
      </div>
      <Section className="flex justify-between items-start lg:items-center">
        <div className="order-2" />
        <div className="order-2 lg:order-1">
          <Link to="/">
            <div style={{ width: "10.5rem" }}>
              <Image src={logo} alt="Quality Cheese" />
            </div>
          </Link>
        </div>
        <div className="order-3 relative">
          <div
            className="p-3 block lg:hidden absolute right-0 z-100 cursor-pointer"
            onClick={() => setModalIsActive((prevState: boolean) => !prevState)}
          >
            <Text className="text-2xl text-darkGray">
              <FontAwesomeIcon icon={icon} />
            </Text>
          </div>
          <div className="hidden lg:block">
            <div className="flex">
              <Menu />
              <div className="flex ml-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/qualitycheese"
                >
                  <img
                    src={FBIcon}
                    alt="Follow us on Facebook"
                    title="Follow us on Facebook"
                    style={{
                      width: "26px",
                      display: "inline-block",
                      margin: "0 .25rem",
                    }}
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/adoptanalp/">
                  <img
                    src={IGIcon}
                    alt="Follow us on Instagram"
                    title="Follow us on Instagram"
                    style={{
                      width: "26px",
                      display: "inline-block",
                      margin: "0 .25rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Header;
