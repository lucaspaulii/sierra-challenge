import { useState } from "react";

export default function TasksCreation() {
  const [taskName, setTaskName] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (taskName.length < 2) {
      return;
    }
    if (event.key == "Enter") {
      // Handle Task creation via useTasks
    }
  };

  return (
    <input
      id="createTask"
      type="text"
      placeholder="Add todo item"
      autoComplete="off"
      className="w-full border-b border-l-0 border-r-0 border-t-0 border-charcoal-600 bg-transparent text-xl placeholder:text-white placeholder:opacity-60 focus:rounded focus:border-none"
      value={taskName}
      onChange={(e) => {
        setTaskName(e.target.value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
}
