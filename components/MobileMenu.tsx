import React from "react";

import { Link } from "@chakra-ui/next-js";
import { links } from "utils/links";

const MobileMenu = () => (
  <>
    {links.map(({ label, url }, i) => (
      <Link
        key={i}
        href={url}
        px={2}
        py={3}
        color="brand.darkGray"
        fontSize={[2, 1, 0]}
      >
        {label}
      </Link>
    ))}
  </>
);

export default MobileMenu;
