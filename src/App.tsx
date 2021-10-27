import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TodoInput } from './containers/components/TodoInput/TodoInput';
import { TodoItemsList } from './containers/components/TodoList/TodoItemsList';
import { RootState } from './redux/store';

function App() {
  const todoList = useSelector((state: RootState) => state);
  return (
    <div className="App">
      <TodoInput/>
      <TodoItemsList/>
    </div>
  );
}

export default App;
