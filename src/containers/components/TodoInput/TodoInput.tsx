import { FC } from 'react'
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import './TodoInput.css';
import { addTodo } from "../../../redux/reducers/addTodoReducer";

export const TodoInput: FC = () => {
    const [todo, setTodo] = useState<string>('');

    // const todoList = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: any) => {
        setTodo(e.target.value)
    };
    return (
        <>
            <h1 className="todo-name">Todo List</h1>
            <div className="todo-input-filed">
                <div >
                    <input
                        className="todo-input"
                        type="text"
                        name="todoInput"
                        value={todo}
                        placeholder="Write a note"
                        onChange={(e) => handleChange(e)}
                        maxLength = {160}
                    /><br/>
                    <span className="input-counter">Доступное количество символов: {160-todo.length}</span>
                </div>
                <button className="todo-add-btn" onClick={() => {
                    dispatch(addTodo(todo));
                    setTodo("");
                }}
                >Add</button>
            </div>
        </>
    )
}
