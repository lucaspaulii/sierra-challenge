import { useState } from "react";
import { useTasks } from "~/utils/hooks/useTasks";

export default function TasksCreation({ update }: { update: Function }) {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useTasks();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (taskName.length < 2) {
      return;
    }
    if (event.key == "Enter") {
      handleTaskSubmit(taskName);
      update();
    }
  };

  function handleTaskSubmit(taskName: string) {
    createTask(taskName);
    setTaskName("");
  }

  return (
    <input
      id="createTask"
      type="text"
      placeholder="Add todo item"
      autoComplete="off"
      className="w-full border-b border-l-0 border-r-0 border-t-0 border-charcoal-600 bg-transparent text-xl transition-all duration-100 placeholder:text-white placeholder:opacity-60 focus:rounded focus:border-none focus:p-3"
      value={taskName}
      onChange={(e) => {
        setTaskName(e.target.value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}
