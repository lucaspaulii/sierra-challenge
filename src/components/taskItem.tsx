import { useState } from "react";
import { Task } from "~/utils/hooks/useTasks";

export default function TaskItem({
  task,
  handleClick,
  handleEdit,
}: {
  task: Task;
  handleClick: Function;
  handleEdit: Function;
}) {
  const [taskName, setTaskName] = useState(task.name);
  const isCompleted = task.status == "completed";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setTaskName(newName);
    //edit task here
  }

  return (
    <div key={task.id} className="flex w-full items-center gap-3">
      {isCompleted ? (
        <p className="text-xl line-through">{task.name}</p>
      ) : (
        <input
          value={taskName}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key == "Enter") e.currentTarget.blur();
          }}
          className="h-fit border-none bg-transparent p-0 text-xl focus:border-none focus:outline-none"
        />
      )}
    </div>
  );
}
