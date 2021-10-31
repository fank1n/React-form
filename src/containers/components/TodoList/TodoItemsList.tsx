import { FC } from 'react'
import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import './TodoItemsList.css';
import { removeTodo, setTodoStatus } from '../../../redux/reducers/addTodoReducer';
import { TodoItem } from './TodoItem/TodoItem';
import { Todo } from '../../../models/Todo'


export const TodoItemsList: FC = () => {
    const todoList = useSelector((state: RootState) => state);
    const [itemsFilter, setItemsFilter] = useState('all');

    const taskFilter = (todoList: Array<Todo>, filterFor: string) => {

        if (filterFor === "all") {
            return todoList;
        }
        if (filterFor === "completed") {
            return todoList.filter(todo => todo.completed);
        }
        if (filterFor === "working") {
            return todoList.filter(todo => !todo.completed);
        }
        if (filterFor === "favorite") {
            return todoList.filter(todo => todo.favorite && !todo.completed);
        }
    }

    const todoItems = taskFilter(todoList, itemsFilter);

    return (

        <div>
            <div className="filter-container">
                {/* <p className='filter-title'>Фильтр по задачам</p> */}
                <div className="filter-btns-container">
                    <button 
                    className={itemsFilter === 'all' ? "filter-btn-all-default" : "filter-btn"}  
                    value="all" 
                    onClick={() => setItemsFilter('all')}
                    >
                        Все задачи</button>
                    <button 
                    className={itemsFilter === 'completed' ? "filter-btn-completed-active" : "filter-btn"}
                    value="completed" 
                    onClick={() => setItemsFilter('completed')}
                    >
                        Выполненные задачи</button>
                    <button 
                    className={itemsFilter === 'working' ? "filter-btn-working-active" : "filter-btn"} 
                    value="working" 
                    onClick={() => setItemsFilter('working')}
                    >
                        Задачи в работе</button>
                    <button 
                    className={itemsFilter === 'favorite' ? "filter-btn-favorite-active" : "filter-btn"}
                    value="favorite" 
                    onClick={() => setItemsFilter('favorite')}
                    >
                        Избранные задачи</button>
                </div>
            </div>
            {todoItems && todoItems.map((todo: Todo) => (
                <TodoItem
                    id={todo.id}
                    description={todo.description}
                    completed={todo.completed}
                    favorite={todo.favorite}
                />))}
        </div>
    )
}