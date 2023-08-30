import { useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState([] as Task[]);

    const createTask = (taskName: string) => {
        const newTask: Task = {
            id: 1,
            name: taskName,
            status: "todo"
        }
        const newTasks = [newTask, ...tasks];
        updateTasksAndLocalStorage(newTasks)
    }

    function updateTasksAndLocalStorage(updatedTasks: Task[]) {
        setTasks([...updatedTasks]);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      }

    return { tasks, createTask }
}

export type Task = {
    id: number;
    name: string;
    status: "todo" | "completed";
}