import React from "react";
import {TodoItem} from "./TodoItem"

export function TodoList({ todos }) { //recibe un array
    return (<ul>
        {todos.map((todo) => ( //recorremos con un maps
            <TodoItem todo={todo} />
        ))}
    </ul>)
}