import { useTasks } from "~/utils/hooks/useTasks";
import TaskItem from "./taskItem";

export default function TasksList({ update }: { update: Function }) {
    let { tasks } = useTasks();

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.id}/>
                )
            })}
        </div>
    )
};
