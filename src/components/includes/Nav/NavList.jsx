import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function NavList({ navOpen, categories }) {
  return (
    <nav className={navOpen ? "nav-list-active" : ""}>
      <ul>
        <Link to="/" name="">
          <li>
            <FontAwesomeIcon icon={faInbox} className="text__white mr-xs" />
            All Tasks
          </li>
        </Link>
        <Link to="/" name="Return to home">
          <li>
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text__white mr-xs"
            />{" "}
            Home
          </li>
        </Link>
      </ul>
    </nav>
  );
}
