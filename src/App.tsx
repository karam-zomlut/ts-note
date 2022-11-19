import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { ITodo } from './Interfaces';
import { addTodo, deleteTodo, switchStatus } from './Slices';
import type { ITodoList } from './Interfaces';

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

      <ul>
        {todoList &&
          todoList?.map(({ title, status, id }: ITodo) => (
            <li key={id}>
              <span>{title}</span>
              <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
              <button onClick={() => dispatch(switchStatus(id))}>
                {status === true ? 'uncheck' : 'check'}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
