import Search from "./Search";
import ShowDone from "./ShowDone";

export default function Filters() {
  return (
    <section className="container">
      <section className="filter-grid width__100">
        <Search />
        <ShowDone />
      </section>
    </section>
  );
}
