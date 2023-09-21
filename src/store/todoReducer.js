import { createSlice } from "@reduxjs/toolkit";

//Reducers to add or manipulate the items added or in the todo list 
export const todoSlice = createSlice({

    name: 'todo',
    initialState: { list: [], lastID: 0 },

    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.lastID + 1, 
                title: action.payload.title,
                completed: false,
            };
            state.list.push(newTodo);
            state.lastID += 1;
        },  
        toggleComplete: (state, action) => {
            const todoIndex = state.list.findIndex((todo) => todo.id === action.payload.id);
            state.list[todoIndex].completed = action.payload.completed;
        },
        //To delete the todo, filter is used
        deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload.id);
        },
        //To edit a todo the index is checked the action of the state is updated accordingly
        editTodo: (state, action) => {
            const todoIndex = state.list.findIndex((todo) => todo.id === action.payload.id);
            state.list[todoIndex].title = action.payload.title;
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
