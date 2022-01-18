import { useState } from "react";
import { TaskProvider } from "./state/TaskProvider";

import Header from "./components/includes/Header";
import Nav from "./components/includes/Nav";

import Main from "./components/Main";

export default function App() {
  const [formToggled, setFormToggled] = useState(false);

  return (
    <>
      <Nav />
      <main>
        <Header formToggled={formToggled} setFormToggled={setFormToggled} />
        <TaskProvider>
          <Main formToggled={formToggled} setFormToggled={setFormToggled} />
        </TaskProvider>
      </main>
    </>
  );
}

// importance is a ranking from 1 - 3 and may be null (1 = most important, 3 = less important)

const categories = ["", "Home", "Work", "Family"];
