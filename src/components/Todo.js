import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../store/todoReducer";

function Todo({ todo }) {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteTodo({ id: todo.id }));
    };

    const completeHandler = () => {
        dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }));
    };

    const editHandler = () => {
        const newTitle = prompt("Edit task:");
        if (newTitle) {
            dispatch(editTodo({ id: todo.id, title: newTitle }));
        }
    };

    return (
        <li className="list">
            <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                {todo.title}
            </span>
            <button className="todo-button delete" onClick={deleteHandler}>Delete</button>
            <button className="todo-button" onClick={editHandler}>Edit</button>
            <button className="todo-button" onClick={completeHandler}>
                {todo.completed ? "Undo" : "Complete"}
            </button>  
        </li>
    );
}

export default Todo;
