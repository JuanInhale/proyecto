import React, {useState, Fragment, useRef} from "react";
import { TodoList } from "./components/TodoList"

export function App(){
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1",completed: false}
    ]);

    const todoTaskRef = useRef();

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if (task == "") return;

        setTodos()
    };
        
    
    return (
        // Fragment se usa para guardar muchos elementos, y dentro de un elemento guardo varios
        // Antes se guardaba en un <div> </div>
        <Fragment>
        <TodoList todos = {todos} />
        <input ref={todoTaskRef} type = "text" placeholder="Nueva Tarea"/>
        <button> onClick={handleTodoAdd}♠</button>
        <button>☺</button>
        </Fragment>
    );
}

