import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    setTasks(getUpdatedLocalStorage());
  }, []);

  const createTask = (taskName: string) => {
    const newTask: Task = {
      id: 1,
      name: taskName,
      status: "todo",
    };
    const existingTasks = getUpdatedLocalStorage();
    const newTasks = [newTask, ...existingTasks];
    updateTasksAndLocalStorage(newTasks);
  };

  function updateTasksAndLocalStorage(updatedTasks: Task[]) {
    setTasks([...updatedTasks]);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function getUpdatedLocalStorage(): Task[] {
    const tasksStored = localStorage.getItem("tasks");
    if (tasksStored) {
      return JSON.parse(tasksStored);
    } else {
      return [];
    }
  }

  return { tasks, createTask };
};

export type Task = {
  id: number;
  name: string;
  status: "todo" | "completed";
};
