import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbtack,
  faCalendar,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { useTasks, UPDATE_TASK } from "../../state/TaskProvider";

export default function Task({ task }) {
  const [tasks, dispatch] = useTasks();

  const handleSetStatus = () => {
    let delta = {
      ...task,
      is_completed: task.is_completed ? false : true,
    };
    dispatch({ type: UPDATE_TASK, task: delta });
  };

  return (
    <li className="task width__100 flex__left grid__col-sm">
      <label>
        <input
          type="checkbox"
          role="button"
          aria-pressed={task.is_completed}
          defaultChecked={task.is_completed}
          onChange={handleSetStatus}
        />
      </label>
      <div className="grid__one grid__row-xs grid__just-null">
        <div className="flex__left grid__col-xs">
          <h3
            className={`text__bold text__regular ${
              task.is_completed ? "text__strike" : ""
            }`}
          >
            {task.title}
          </h3>
          <FontAwesomeIcon
            icon={faCaretSquareDown}
            size="lg"
            className="text__green"
          />
        </div>
        <div className="flex__left grid__col-xs">
          <p className="task-clamp-desc text__sm">{task.notes}</p>
        </div>
        <div className="flex__left grid__col-sm">
          {task.importance && (
            <span
              className={`task-priority priority-${task.importance}`}
              title={`Priority ${task.importance}`}
            ></span>
          )}
          {task.due_date && (
            <span className="flex__left grid__col-xs">
              <FontAwesomeIcon icon={faCalendar} className="text__blue" />
              <span>
                {moment(task.due_date, "MMMM D, YYYY").format("MMM D")}
              </span>
            </span>
          )}
          <FontAwesomeIcon
            icon={faThumbtack}
            className="text__blue"
            role="button"
            aria-pressed={true}
          />
        </div>
      </div>
    </li>
  );
}
