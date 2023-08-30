import { useTasks } from "~/utils/hooks/useTasks";
import TaskItem from "./taskItem";

export default function TasksList({ update }: { update: Function }) {
  let { tasks, concludeTask, editTask } = useTasks();

  const handleClick = (id: number) => {
    concludeTask(id);
    update();
  };

  const handleEdit = (id: number, taskName: string) => {
    editTask(id, taskName);
  };

  return (
    <div className="flex h-fit w-full flex-col gap-5 mt-4">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} handleClick={handleClick} handleEdit={handleEdit}/>;
      })}
    </div>
  );
}
