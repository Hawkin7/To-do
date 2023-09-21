import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoReducer";

function AddTodo() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onAddSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title }));
        setTitle("");
    };

    return (
        <form onSubmit={onAddSubmit}>
            <input 
                className="input-field"
                type="text" 
                onChange={onTitleChange} 
                value={title} 
                autoFocus
            />
            <button className="add-todo-button" type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;