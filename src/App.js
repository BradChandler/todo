import { useState } from "react";
import { TaskProvider } from "./state/TaskProvider";

import Router from "./Router";

import Header from "./components/includes/Header";
import Nav from "./components/includes/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <TaskProvider>
          <Router />
        </TaskProvider>
      </main>
    </>
  );
}

// importance is a ranking from 1 - 3 and may be null (1 = most important, 3 = less important)

const categories = ["", "Home", "Work", "Family"];
