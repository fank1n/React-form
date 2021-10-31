import { FC } from 'react'
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import './TodoInput.css';
import { addTodo } from "../../../redux/reducers/addTodoReducer";
import logo_plus from "../../../icons/plus.svg"

export const TodoInput: FC = () => {
    const [todo, setTodo] = useState<string>('');

    // const todoList = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e: any) => {
        setTodo(e.target.value)
    };
    return (
        <>
            <h1 className="todo-name">Список задач</h1>
            <div className="todo-input-filed">
                <div >
                    <input
                        className="todo-input"
                        type="text"
                        name="todoInput"
                        value={todo}
                        placeholder="Запишите что-нибудь"
                        onChange={(e) => handleChange(e)}
                        maxLength = {160}
                    /><br/>
                    {todo.length === 160
                     ?(<span className="input-counter-error">Превышен лимит текста!</span>)
                     :(<span className="input-counter">Доступное количество символов: {160-todo.length}</span>)}
                    
                </div>
                <button className="todo-add-btn" onClick={() => {
                    dispatch(addTodo(todo));
                    setTodo("");
                }}
                ><img className = "input-plus-btn" src={logo_plus} alt="add" width = "30px" height = "30px"/></button>
            </div>
        </>
    )
}
