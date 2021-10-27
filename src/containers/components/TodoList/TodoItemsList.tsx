import {FC} from 'react'
import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import './TodoItemsList.css';
import { removeTodo, setTodoStatus } from '../../../redux/reducers/addTodoReducer';
import { TodoItem } from './TodoItem/TodoItem';
import {Todo} from '../../../models/Todo'


export const TodoItemsList: FC = () => {
    const todoList = useSelector((state: RootState) => state);

    return(
        <div>
            {todoList.map((todo:Todo) => (
            <TodoItem 
            id = {todo.id}
            description = {todo.description}
            completed = {todo.completed}
            favorite = {todo.favorite} 
            /> ))}
        </div>
    )
}