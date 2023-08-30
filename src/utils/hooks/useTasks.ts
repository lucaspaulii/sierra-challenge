import { useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState([] as Task[]);
}

export type Task = {
    id: number;
    name: string;
    status: "todo" | "completed";
}