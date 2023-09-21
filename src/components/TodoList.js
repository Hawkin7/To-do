import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

//The todo elements are mapped into a list 
function TodoList() {
    const todos = useSelector((state) => state.todos.list);

    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
