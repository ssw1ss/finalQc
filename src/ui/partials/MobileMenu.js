import React from "react"

import { Link } from "ui/base"
import { links } from "ui/partials"

const MobileMenu = () => (
  <>
    {links.map(({ label, url }, i) => (
      <Link
        key={i}
        to={url}
        px={2}
        py={3}
        color="darkGray"
        fontSize={[2, 1, 0]}
      >
        {label}
      </Link>
    ))}
  </>
)

export default MobileMenu
