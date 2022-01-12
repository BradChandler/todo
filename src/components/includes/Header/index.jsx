import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header({ navOpen, setNavOpen }) {
  return (
    <header
      className={`bg__dk-orange padding__xxs ${
        navOpen ? "header-active" : null
      }`}
    >
      <section className="container flex__between">
        <FontAwesomeIcon
          icon={navOpen ? faTimes : faBars}
          size="lg"
          className="text__white pointer"
          role="button"
          aria-pressed={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        />
        <h1 className="text__center text__md text__white">Todo List</h1>
        <FontAwesomeIcon
          icon={faPlus}
          size="lg"
          className="text__lt-blue pointer"
          role="button"
          aria-pressed={true}
        />
      </section>
    </header>
  );
}
