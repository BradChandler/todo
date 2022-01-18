import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TaskForm({ task, formToggled, setFormToggled }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="task-form bg__white">
      <section className="grid__one grid__just-null">
        <section className="task-form--header padding__xxs bg__white">
          <section className="container flex__between grid__column-xs">
            <h2 className="text__bold text__md">
              {task ? "Edit Task" : "New Task"}
            </h2>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="text__dk-blue"
              role="button"
              aria-pressed={false}
              onClick={() => setFormToggled(!formToggled)}
            />
          </section>
        </section>
        <form
          method="POST"
          onSubmit={handleFormSubmit}
          className="form-standard container"
        >
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Task title"
            />
          </label>
          <label htmlFor="#">
            Importance
            <div className="grid__one grid__row-xs grid__just-null">
              {priorities.map((p) => {
                return (
                  <label
                    htmlFor={`priority-${p}`}
                    className="flex__left text__light grid__col-xs"
                    key={p}
                  >
                    <input
                      type="radio"
                      name="importance"
                      id={`priority-${p}`}
                      value={p}
                    />
                    Priority {p}
                  </label>
                );
              })}
            </div>
          </label>
          <label htmlFor="#">
            Category
            <div className="grid__one grid__row-xs grid__just-null">
              {priorities.map((p) => {
                return (
                  <label
                    htmlFor={`priority-${p}`}
                    className="flex__left text__light grid__col-xs"
                    key={p}
                  >
                    <input
                      type="radio"
                      name="importance"
                      id={`priority-${p}`}
                      value={p}
                    />
                    Priority {p}
                  </label>
                );
              })}
            </div>
          </label>
          <label htmlFor="notes">
            Notes
            <textarea
              name="notes"
              id="notes"
              placeholder="Task notes"
              rows="3"
            ></textarea>
          </label>
          <label htmlFor="due-date">
            Due Date
            <input
              type="date"
              name="due-date"
              id="due-date"
              placeholder="MM-DD-YYYY"
            />
          </label>
          <div className="flex__left">
            <button type="submit" className="btn btn__blue grid__col-xs">
              Add Task
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

const priorities = [1, 2, 3];
