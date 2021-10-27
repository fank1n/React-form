import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../redux/reducers/addTodoReducer";
import { AppDispatch } from "../../../redux/store";
import "./Modal.css";

const Modal = ({active, setActive, id }:any) => {
    const dispatch = useDispatch<AppDispatch>();
    const handleDeleteTodo = () => {
        dispatch(removeTodo(id));
        setActive(!active);
    }

    return (
        <div className = {active ? "modal active" : "modal"} onClick = {() => setActive(!active)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick = {e => e.stopPropagation()}>
                <h1>Удалить?</h1>
                <button onClick = {handleDeleteTodo}>Да</button>
                <button onClick={() => setActive(false)}>Отмена</button>
            </div>
        </div>
    );
}
export default Modal;