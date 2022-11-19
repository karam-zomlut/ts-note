import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, TodoState } from '../Interfaces';
// import type { ITodoList } from '../Interfaces';

// ITodoList not work in below function Error
const getInitialValue: any = () => {
  const localTodoList: string | null = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  } else {
    return [];
  }
};

const initialState: TodoState = {
  todoList: getInitialValue(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>): void => {
      state.todoList = [...state.todoList, action.payload];
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action: PayloadAction<number>): void => {
      const { todoList } = state;
      let filteredTodo: ITodo[] = todoList.filter(
        (item) => item.id !== action.payload
      );
      state.todoList = filteredTodo;
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    switchStatus: (state, action: PayloadAction<number>): void => {
      const { todoList } = state;
      let selectedTodo: ITodo | undefined = todoList.find(
        (todo) => todo.id === action.payload
      );
      if (selectedTodo !== undefined) {
        selectedTodo.status = !selectedTodo?.status;
      }
      window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
  },
});

export const { addTodo, deleteTodo, switchStatus } = todoSlice.actions;
export default todoSlice.reducer;
