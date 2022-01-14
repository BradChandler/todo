import React, { useContext, createContext, useReducer } from "react";

export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const CREATE_TASK = "CREATE_TASK";

// export const CREATE_CATEGORY = 'CREATE_CATEGORY';
// export const DELETE_CATEGORY = 'DELETE_CATEGORY';

const initialState = [
  {
    id: "grocery-list-1",
    title: "Grocery List",
    notes: "Work on creating a grocery list for shopping this weekend.",
    importance: 3,
    category: "Home",
    pinned: false,
    due_date: "",
    is_completed: false,
  },
  {
    id: "vacuum-2",
    title: "Vacuum",
    notes: "Complete the vacuuming around the house before guests arrive.",
    importance: 1,
    category: "Home",
    pinned: false,
    due_date: "",
    is_completed: false,
  },
  {
    id: "complete-design-3",
    title: "Complete Design",
    notes:
      "Work through and complete design for new application before next week.",
    importance: 2,
    category: "Work",
    pinned: false,
    due_date: "January 20, 2022",
    is_completed: false,
  },
  {
    id: "learn-react-4",
    title: "Learn React",
    notes: "",
    importance: null,
    category: "Work",
    pinned: false,
    due_date: "",
    is_completed: true,
  },
  {
    id: "vaccine-paperwork-1",
    title: "Vaccine Paperwork",
    notes: "Send vaccine paperwork to HR.",
    importance: null,
    category: "Work",
    pinned: false,
    due_date: "January 3, 2022",
    is_completed: true,
  },
  {
    id: "what-is-for-dinner-1",
    title: "What Is for Dinner",
    notes: "",
    importance: null,
    category: "",
    pinned: true,
    due_date: "",
    is_completed: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_TASK: {
      return state.filter((t) => {
        return t.id !== action.task.id;
      });
    }
    case UPDATE_TASK: {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case CREATE_TASK: {
      let titleTest = /[0-9a-zA-Z\s]/gim;
      let taskId = action.task.title
        .replace(titleTest, "")
        .replace(/\s/, "-")
        .concat(new Date().getTime());
      let newTask = {
        id: taskId,
        ...action.task,
        pinned: false,
        is_completed: false,
      };
      return [...state, newTask];
    }
    default: {
      console.error("Unknown action type", action.type);
    }
  }
};

export const TaskProviderContext = createContext([initialState, () => {}]);

TaskProviderContext.displayName = "Task";

export const useTasks = () => useContext(TaskProviderContext);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null, () => initialState);

  return (
    <TaskProviderContext.Provider value={[state, dispatch]}>
      {children ? children : ""}
    </TaskProviderContext.Provider>
  );
};
