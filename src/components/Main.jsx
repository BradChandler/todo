import Tasks from "./common/Tasks";
import TasksDone from "./common/TasksDone";
import TaskForm from "./common/TaskForm";

import { CSSTransition } from "react-transition-group";

export default function Home({ formToggled, setFormToggled }) {
  return (
    <>
      <section className="container pos__rel">
        <h1 className="padding__xs text__bold text__md text__blue">
          All Tasks
        </h1>
        <section className="padding__sm">
          <Tasks />
        </section>
        <TasksDone />
      </section>
      <CSSTransition
        in={formToggled}
        timeout={250}
        classNames="menu-slide"
        unmountOnExit
      >
        <TaskForm
          formToggled={formToggled}
          setFormToggled={setFormToggled}
          key="task-form"
        />
      </CSSTransition>
    </>
  );
}
