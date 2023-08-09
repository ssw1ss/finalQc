import React from "react";
import Link from "./Link";

const NavLink = ({ className = "", ...props }: any) => (
  <Link
    className={"text-gray transition-colors hover:text-black" + className}
    {...props}
  />
);

export default NavLink;
