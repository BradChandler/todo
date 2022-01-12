import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Task({ todo }) {
  return (
    <li class="card task-card width__100">
      <label htmlFor="complete-task">
        <input type="checkbox" id="complete-task" name="complete-task" />
      </label>
      <div className="grid__one grid__row-sm grid__just-null">
        <div className="flex__between">
          <h4 className="text__bold text__md">Todo Title</h4>
          <div className="flex__between ml-xs">
            <FontAwesomeIcon
              icon={faEdit}
              size="1x"
              className="text__blue pointer mr-xs"
              role="button"
              aria-pressed={true}
            />
            <FontAwesomeIcon
              icon={faTrash}
              size="1x"
              className="text__dk-orange pointer"
              role="button"
              aria-pressed={true}
            />
          </div>
        </div>
        <p>
          A description of this specific task appears here and can be changed
          later if necessary.
        </p>
      </div>
    </li>
  );
}
