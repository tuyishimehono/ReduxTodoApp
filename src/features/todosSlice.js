import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:'todos',
    initialState: {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        inputValue: "",
    },

    reducers: {
        setInputValue(state, action) {
            state.inputValue = action.payload
        }, 
        addTodo(state) {
            if(state.inputValue.trim() !== ""){
                state.todos.push({
                    id:Date.now(),
                    text: state.inputValue,
                    completed: false,
                });
                state.inputValue = "";
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        },
        toggleTodo(state, action) {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
              localStorage.setItem("todos", JSON.stringify(state.todos));
            }
          },
          deleteTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
          },
        },
});

export const { setInputValue, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;