import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../../redux/reducers/addTodoReducer";
import { AppDispatch } from "../../../redux/store";
import "./Modal.css";
import cross from "../../../icons/cross.svg"
const Modal = ({postDate, modalText, active, setActive, id }:any) => {
    const dispatch = useDispatch<AppDispatch>();
    
    const handleDeleteTodo = () => {
        dispatch(removeTodo(id));
        setActive(!active);
    }

    return (
        <div className = {active ? "modal active" : "modal"} onClick = {() => setActive(!active)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick = {e => e.stopPropagation()}>
                <img 
                className = "modal-close-cross"
                src = {cross} 
                alt = "cross"
                onClick = {() => setActive(false)}
                />
                <h2 className = "modal-title">Вы действительно хотите удалить задачу?</h2>
                <div className="modal-text-container">
                    <p className = "modalText">{modalText}</p>
                </div>
                <p className = "modal-date">Дата создания: {postDate}</p>
                <div className="modal-btn-container">
                    <button className="modal-cancel-btn" data-test-id="cancel-btn" onClick={() => setActive(false)}>Отмена</button>
                    <button className="modal-confirm-btn" onClick = {handleDeleteTodo}>Да, удалить</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;