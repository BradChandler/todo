// import Stats from "../common/Stats";
// import Filters from "../common/Filters";
import Tasks from "../common/Tasks";
import TasksDone from "../common/TasksDone";

export default function Home() {
  return (
    <section className="container">
      {/* <Stats />
      <Filters /> */}
      <h1 className="padding__xs text__bold text__md text__blue">All Tasks</h1>
      <section className="padding__sm">
        <Tasks />
      </section>
      <TasksDone />
    </section>
  );
}
