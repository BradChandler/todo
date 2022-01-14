import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="padding__xxs">
      <section className="container flex__between">
        <label htmlFor="search-todo-list" className="flex__left mr-xs">
          <FontAwesomeIcon icon={faSearch} size="lg" className="text__blue" />
          <input
            type="text"
            className="header-search"
            name="search-todo-list"
            id="search-todo-list"
            placeholder="Search List"
          />
        </label>
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="2x"
          className="text__lt-blue pointer"
          role="button"
          aria-pressed={true}
        />
      </section>
    </header>
  );
}
