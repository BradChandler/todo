import { useState } from "react";
import { useTasks } from "../../state/TaskProvider";
import Task from "./Task";

export default function Tasks() {
  const [showComplete, setShowComplete] = useState(false);

  const [tasks, dispatch] = useTasks();

  const filteredTasks = () => {
    return tasks.filter((t) => t.is_completed);
  };

  if (!filteredTasks() || filteredTasks().length <= 0)
    return (
      <section className="padding__sm">
        <div className="flex__left grid__col-sm padding__xs">
          <h2 className="text__bold text__blue">No Completed Tasks</h2>
        </div>
      </section>
    );

  return (
    <section className="padding__sm">
      <div className="flex__left grid__col-sm padding__xs">
        <h2 className="text__bold text__blue">Show Completed</h2>
        <label htmlFor="show-complete">
          <input
            type="checkbox"
            name="show-complete"
            id="show-complete"
            onChange={(e) => setShowComplete(e.target.checked)}
          />
        </label>
      </div>
      {showComplete && (
        <ul className="grid__one grid__row-sm grid__just-left">
          {filteredTasks().map((t) => {
            return <Task task={t} key={t.id} />;
          })}
        </ul>
      )}
    </section>
  );
}
