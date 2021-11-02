import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "../../models/Todo";
import INITIALIZE_TODOS from "../actions/todoActions"
const initialState = [] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: (Math.random() *1000).toString(),
          description,
          completed: false,
          favorite: false
        } as Todo,
      }),
    },
    editTodo(state, action: PayloadAction<{text: string, id : string}>){
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].description = action.payload.text;
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean, favorite: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      state[index].favorite = action.payload.favorite;
    },
  },
});

export const toDoReducer = (state = [], action:any ) => {
  switch(action.type) {
      case INITIALIZE_TODOS: {
          const items = action.payload
          return items
      }
  }
}

export const {addTodo, removeTodo, setTodoStatus, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
