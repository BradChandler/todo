import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavList from "./NavList";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <section className={`sidebar ${navOpen ? "sidebar-open" : null}`}>
      <FontAwesomeIcon
        icon={navOpen ? faTimes : faBars}
        size="lg"
        className="text__white pointer icon"
        onClick={() => setNavOpen(!navOpen)}
        style={{ width: 32, transform: "translateX(-8px)" }}
      />
      <NavList navOpen={navOpen} />
    </section>
  );
}
