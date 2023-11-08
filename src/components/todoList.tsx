import { useContext } from "react";
import ListItem from "./ListItem";
import { TasksContext } from "../TaskProvider/TaskProvider";

export default function TaskList() {
    const { data } = useContext(TasksContext);

    return (
        <div className="list">
            {data?.map((todo) => (
                <ListItem {...todo} key={todo.id} />
            ))}
        </div>
    );
}