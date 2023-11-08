import {createContext, ReactNode, useEffect, useState} from "react";

export const TodoContext = createContext<any>(null);

const ENDPONT = "https://jsonplaceholder.typicode.com/users/1/todos";

export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}


export const TodosProvider = ({ children }: { children: ReactNode }) => {
    const [data, setDtata] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        async function fetchDAta() {
           try {
               const res = await fetch(ENDPONT)
               const data = await res.json();
               setDtata(data);
               setLoading(false);
           }catch(e: any ) {
               setLoading(false);
               setError(e.message);
           }
        }

        fetchDAta();
    }, []);

    const toggleStatus = (id: number) => {
        const tempData = data.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return { ...todo };
        });
        setDtata(tempData);
    };

    if (loading) return <span>loading</span>;
    if (error) return <span>{error}</span>;

    return (
        <TodoContext.Provider value={{ data, toggleStatus }}>
            {children}
        </TodoContext.Provider>
    );
};