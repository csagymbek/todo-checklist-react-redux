import { createSlice } from "@reduxjs/toolkit";

const initialState = { todoList: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, { type, payload }) => {
      state.todoList.push(payload);
    },
    setCheck: (state, { type, payload }) => {
      state.todoList.map((item) => {
        if (payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
