import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddTask() {
  return (
    <li
      className="card add-task-card flex__between pointer text__bold width__100"
      role="button"
      aria-pressed={true}
    >
      add a new task
      <FontAwesomeIcon icon={faPlus} size="lg" className="text__blue ml-xs" />
    </li>
  );
}
