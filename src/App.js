import React, { useState } from "react";
import Router from "./Router";

import Header from "./components/includes/Header";
import Nav from "./components/includes/Nav";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Router />
      </main>
    </>
  );
}
