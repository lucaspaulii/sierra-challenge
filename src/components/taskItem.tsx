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
    handleEdit(task.id, newName);
  };

  return (
    <div key={task.id} className="flex w-full items-center gap-3">
      <div className="flex items-center justify-center">
        <input
          id={task.id.toString()}
          className="peer hidden"
          type="radio"
          defaultChecked={isCompleted}
          disabled={isCompleted}
          onClick={() => {
            handleClick(task.id);
          }}
        />
        <label
          htmlFor={task.id.toString()}
          className="box-border h-6 w-6 rounded-full bg-charcoal-600 transition-all duration-100 disabled:bg-charcoal-700  peer-checked:border-4 peer-checked:border-charcoal-600 peer-checked:bg-charcoal-800"
        ></label>
      </div>
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
