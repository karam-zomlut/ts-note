import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { ITodo } from './Interfaces';
import { addTodo } from './Slices';
import type { ITodoList } from './Interfaces';
import { Container } from './Components';

function App() {
  const todoList: ITodoList = useAppSelector((state) => state.todo.todoList);
  const dispatch = useAppDispatch();

  const todo: ITodo = {
    id: Date.now(),
    title: 'Hello World',
    status: false,
  };

  console.log(todoList);

  return (
    <div className='App'>
      <h1>Karam Zomlot</h1>
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
      <Container />
    </div>
  );
}

export default App;
