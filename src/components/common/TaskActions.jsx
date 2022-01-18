import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrash,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function TaskActions() {
  return (
    <ul className="grid__one grid__row-null task-actions grid__just-null">
      <li className="flex__left grid__col-xs pointer">
        <FontAwesomeIcon icon={faCheckSquare} className="text__green" />
        Complete Task
      </li>
      <li className="flex__left grid__col-xs pointer">
        <FontAwesomeIcon icon={faPencilAlt} className="text__dk-blue" />
        Edit Task
      </li>
      <li className="flex__left grid__col-xs pointer">
        <FontAwesomeIcon icon={faTrash} className="text__dk-orange" />
        Delete Task
      </li>
    </ul>
  );
}
