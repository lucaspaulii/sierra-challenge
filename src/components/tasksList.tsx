import { useTasks } from "~/utils/hooks/useTasks";
import TaskItem from "./taskItem";

export default function TasksList({ update }: { update: Function }) {
  let { tasks, concludeTask } = useTasks();

  const handleClick = (id: number) => {
    concludeTask(id);
    update();
  };

  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} handleClick={handleClick}/>;
      })}
    </div>
  );
}
