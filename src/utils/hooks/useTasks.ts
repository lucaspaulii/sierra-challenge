import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    setTasks(getUpdatedLocalStorage());
  }, []);

  const createTask = (taskName: string) => {
    const newTask: Task = {
      id: generateUniqueId(),
      name: taskName,
      status: "todo",
    };
    const existingTasks = getUpdatedLocalStorage();
    const newTasks = [newTask, ...existingTasks];
    updateTasksAndLocalStorage(newTasks);
  };

  const concludeTask = (id: number) => {
    let taskIndex;
    const existingTasks = getUpdatedLocalStorage();
    const concludedTasks = existingTasks.map((task, index) => {
        if (task.id == id) {
            task.status = "completed";
            taskIndex = index;
        }
        return task;
    });
    if (taskIndex !== undefined) {
        const aux = concludedTasks.splice(taskIndex, 1)[0];
        aux && concludedTasks.push(aux);
    }
    updateTasksAndLocalStorage(concludedTasks);
  }

  function generateUniqueId() {
    return Date.now()
  }

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

  return { tasks, createTask, concludeTask };
};

export type Task = {
  id: number;
  name: string;
  status: "todo" | "completed";
};
