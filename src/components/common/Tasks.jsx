import { useTasks } from "../../state/TaskProvider";
import Task from "./Task";

export default function Tasks() {
  const [tasks, dispatch] = useTasks();
  const filteredTasks = () => {
    return tasks.filter((t) => !t.is_completed);
  };
  return (
    <ul className="grid__one grid__row-sm grid__just-left">
      {filteredTasks().map((t) => {
        return <Task task={t} key={t.id} />;
      })}
    </ul>
  );
}
