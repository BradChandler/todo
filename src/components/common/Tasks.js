import Task from "./Task";
import AddTask from "./AddTask";

export default function Tasks() {
  return (
    <ul className="container grid__one grid__row-sm">
      <Task />
      <AddTask />
    </ul>
  );
}
