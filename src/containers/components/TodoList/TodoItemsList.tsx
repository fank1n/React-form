import {FC} from 'react'
import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import './TodoItemsList.css';
import { removeTodo, setTodoStatus } from '../../../redux/reducers/addTodoReducer';

export const TodoItemsList: FC = () => {
    const todoList = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    return(
        <div>
            {todoList.map((todo:any) => (
                <div className="list-item" key={todo.id}>
                     <p className = "list-item-description">{todo.description}</p>
                     <div className = "option-buttons">
                        <button className = "star-btn">
                            <img className = "star-pic" src = "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"/>
                        </button>
                        <button className = "check-btn" value={todo.completed} onChange = {() => {dispatch(setTodoStatus({completed: !todo.completed, id: todo.id}))}}>
                            {!todo.completed
                        ?
                            (<img className = "check-pic" src = "https://cdn-icons.flaticon.com/png/512/232/premium/232461.png?token=exp=1635331920~hmac=2e3a809fa79a6e4f3d5dd70a0a66b200"/>)
                        :
                            (<img className = "check-pic" src = "https://cdn-icons.flaticon.com/png/512/232/premium/232444.png?token=exp=1635333200~hmac=8f3e54bf1e6413e97d909de461a83157"/>)
                            }
                        </button>
                        <button className = "menu-btn">
                            <img className = "menu-pic" src = "https://cdn-icons-png.flaticon.com/512/633/633684.png"/>
                        </button>
                        <button onClick={() => {dispatch(removeTodo(todo.id));}}></button>
                     </div>
                </div>
            ))}
        </div>
    )
}