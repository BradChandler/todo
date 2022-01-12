import { Link } from "react-router-dom";

export default function NavList({ className, categories }) {
  return (
    <nav className={className}>
      <ul>
        <Link to="/" name="Return to home">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}
