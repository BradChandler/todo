import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="padding__xxs">
      <section className="container flex__between">
        <h1 className="text__center text__md text__blue text__bold">
          Todo List
        </h1>
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
