import { useState } from "react";
import TasksCreation from "./tasksCreation";
import TasksList from "./tasksList";

export default function TasksContainer() {
  const [key, setKey] = useState(0);

  function update() {
    setKey((key) => key + 1);
  }

  return (
    <div className="w-96">
      <TasksCreation update={update} />
      <TasksList key={key} update={update} />
    </div>
  );
}
