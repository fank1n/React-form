import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { TodoInput } from './containers/components/TodoInput/TodoInput';
import { TodoItemsList } from './containers/components/TodoList/TodoItemsList';
import { RootState } from './redux/store';
import {getTodos} from "./redux/thunk"

function App() {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTodos())
  },[])
  return (
    <div className="App">
      <TodoInput/>
      <TodoItemsList/>
    </div>
  );
}

export default App;
