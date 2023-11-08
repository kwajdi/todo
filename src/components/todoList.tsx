import {useContext, useMemo, useState} from "react";
import ListItem from "./listItem.tsx";
import {Todo, TodoContext} from "../todoProvider";


export default function TodoList() {
    const { data } = useContext(TodoContext);
    const [search, setSearch] = useState("");


    const filteredData = useMemo(() => {
        return data.filter((todo: Todo) => {
            return todo.title.toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    return (

        <section className="w-full py-12 bg-gray-300">
            <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
                <div className='sticky top-0 z-10 bg-white p-4 shadow '>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="grid gap-1">
                        <h1 className="text-2xl font-bold tracking-tight">Todo List</h1>
                        <p className="text-zinc-500 dark:text-zinc-400">Keep track of your tasks</p>
                    </div>
                </div>
                <input placeholder='type to search' className='mt-2.5 p-5 h-8 w-full border rounded' value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                    {filteredData?.map((todo: Todo) => (
                    <ListItem {...todo} key={todo.id} />
                ))}
            </div>
        </section>

    );
}