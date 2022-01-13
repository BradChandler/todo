import { Link } from "react-router-dom";

export default function NavList({ navOpen, categories }) {
  return (
    <nav className={navOpen ? "nav-list-active" : ""}>
      <ul>
        <Link to="/" name="Return to home">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}
