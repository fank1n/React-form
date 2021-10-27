import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodoStatus, removeTodo, editTodo } from "../../../../redux/reducers/addTodoReducer";
import { RootState, AppDispatch } from "../../../../redux/store";
import {Todo} from '../../../../models/Todo'
import './TodoItem.css';
import Modal from "../../Modal/Modal";
export const TodoItem: FC<Todo> = ({id, description, favorite, completed}:Todo) => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [saveEditorText, setSaveEditorText] = useState<string>(description)

    const handleDeleteMenu = () => {
        dispatch(removeTodo(id));
        setModalActive(!modalActive);
    }
    const handleSubmitText = (e: any) => {
        // e.preventDefault();
        if(e.charCode == 13){ 
            dispatch(editTodo({text: saveEditorText, id: id}));
            setEditMode(!editMode);
        }
        
    }
    return ( 
        <>
    <div className="list-item" key={id}>
        {editMode ? 
            (<textarea 
                name="editMode"
                value = {saveEditorText} 
                className = "editMode" 
                onKeyPress = {handleSubmitText}
                onChange = {e => setSaveEditorText(e.target.value)}
                autoFocus
                wrap="hard"
                maxLength={160}
            >
            </textarea>)
        :
            (<p className = "list-item-description">{description}</p>)
        }
        <div className = "option-buttons">
        <button className = "star-btn" onClick = {() => {dispatch(setTodoStatus({completed: completed, favorite: !favorite, id: id}))}}>
            {!favorite
        ?
            (<img className = "star-pic" src = "https://cdn-icons-png.flaticon.com/512/1828/1828970.png"/>)
        :
            (<img className = "star-pic" src = "https://cdn-icons-png.flaticon.com/512/1828/1828614.png"/>)
            } 
        </button>
        <button className = "check-btn"  onClick = {() => {dispatch(setTodoStatus({completed: !completed, favorite: favorite, id: id}))}}>
            {!completed
        ?
            (<img className = "check-pic" src = "https://cdn-icons.flaticon.com/png/512/232/premium/232461.png?token=exp=1635331920~hmac=2e3a809fa79a6e4f3d5dd70a0a66b200"/>)
        :
            (<img className = "check-pic" src = "https://cdn-icons.flaticon.com/png/512/232/premium/232444.png?token=exp=1635346301~hmac=fcc0b1c8a7643e19806f1f47624cee9c"/>)
            }
        </button>
        <button className = "menu-btn">
            <img className = "menu-pic" src = "https://cdn-icons-png.flaticon.com/512/633/633684.png" onClick = {() => setMenuOpen(true)}/>
        </button>
        
        {menuOpen ?
            <div className = "menu" onClick = {e => e.stopPropagation()}>
                 
                        <img
                        className="close-menu" 
                        onClick = {() => setMenuOpen(false)}
                        src="https://cdn-icons.flaticon.com/png/512/3416/premium/3416079.png?token=exp=1635353560~hmac=012a5354b9f91812762268f4f5434d15" 
                        alt="cross"
                        width = "18px"
                        height = "18px" 
                    /> 
                    <button onClick = {() => {dispatch(setTodoStatus({completed: completed, favorite: !favorite, id: id}))}}>{!favorite ? "В избранное" : "Убрать из избранного"}</button>
                    <button onClick = {() => {dispatch(setTodoStatus({completed: !completed, favorite: favorite, id: id}))}}>{!completed ? "Выполнено" : "Вернуть в работу"}</button>
                    <button onClick = {() => setEditMode(true)}>Редактировать</button><br/>
                    <button onClick={() => setModalActive(true)}>Удалить</button>
                
            </div>
        : null}
        </div>
    </div>
    <Modal 
        id = {id}
        active = {modalActive} 
        setActive = {setModalActive}/> 
    </>);
}


