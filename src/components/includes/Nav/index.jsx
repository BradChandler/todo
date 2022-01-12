import NavList from "./NavList";

export default function Nav({ navOpen, setNavOpen }) {
  return (
    <section
      className={`modal nav-modal ${navOpen ? "nav-modal-open" : null}`}
      onClick={() => setNavOpen(!navOpen)}
    >
      <NavList className={navOpen ? "nav-active" : null} />
    </section>
  );
}
