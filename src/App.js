import Router from "./Router";

import Header from "./components/includes/Header";
import Nav from "./components/includes/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <Router />
      </main>
    </>
  );
}
