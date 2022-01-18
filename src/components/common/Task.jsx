import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faThumbtack,
  faCalendar,
  faCaretSquareDown,
  faCaretSquareUp,
  faFireAlt,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import { useState } from "react";

import { useTasks, UPDATE_TASK } from "../../state/TaskProvider";

import TaskActions from "./TaskActions";

export default function Task({ task }) {
  const [tasksToggled, setTasksToggled] = useState(false);
  const [tasks, dispatch] = useTasks();

  const handleSetStatus = () => {
    let delta = {
      ...task,
      is_completed: task.is_completed ? false : true,
    };
    dispatch({ type: UPDATE_TASK, task: delta });
  };

  const getImportance = (task) => {
    let impClass;
    switch (task.importance) {
      case 1: {
        impClass = "text__dk-orange";
        break;
      }
      case 2: {
        impClass = "text__lt-orange";
        break;
      }
      case 3: {
        impClass = "text__yellow";
        break;
      }
      default: {
        return;
      }
    }
    return (
      <FontAwesomeIcon
        icon={faFireAlt}
        className={impClass}
        title={`Priority ${task.importance}`}
      />
    );
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
        <div className="flex__left grid__col-xs pos__rel">
          <h3
            className={`text__bold text__regular ${
              task.is_completed ? "text__strike" : ""
            }`}
          >
            {task.title}
          </h3>
          <span>
            <FontAwesomeIcon
              icon={tasksToggled ? faCaretSquareUp : faCaretSquareDown}
              size="lg"
              className="text__dk-blue pointer"
              role="button"
              aria-pressed={tasksToggled}
              onClick={() => setTasksToggled(!tasksToggled)}
            />
            {tasksToggled && <TaskActions />}
          </span>
        </div>
        {(task.due_date || task.importance) && (
          <div
            className="flex__left grid__col-sm"
            style={{ marginTop: "-6px" }}
          >
            {task.due_date && (
              <span className="flex__left grid__col-xs">
                <FontAwesomeIcon icon={faCalendar} className="text__blue" />
                <span>
                  {moment(task.due_date, "MMMM D, YYYY").format("MMM D")}
                </span>
              </span>
            )}
            {getImportance(task)}
            {/* <FontAwesomeIcon
            icon={faThumbtack}
            className="text__blue"
            role="button"
            aria-pressed={true}
          /> */}
          </div>
        )}
        {task.notes && (
          <div className="flex__left grid__col-xs">
            <p className="task-clamp-desc text__sm">{task.notes}</p>
          </div>
        )}
      </div>
    </li>
  );
}
