import { useTasks } from "~/utils/hooks/useTasks";
import TaskItem from "./taskItem";

export default function tasksList() {
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
