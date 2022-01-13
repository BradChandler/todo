import Stats from "../common/Stats";
import Filters from "../common/Filters";
import Tasks from "../common/Tasks";

export default function Home() {
  return (
    <section>
      <Stats />
      <Filters />
      <section className="padding__md">
        <Tasks />
      </section>
    </section>
  );
}
