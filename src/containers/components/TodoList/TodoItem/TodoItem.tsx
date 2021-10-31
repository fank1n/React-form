import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodoStatus, removeTodo, editTodo } from "../../../../redux/reducers/addTodoReducer";
import { RootState, AppDispatch } from "../../../../redux/store";
import { Todo } from '../../../../models/Todo'
import './TodoItem.css';
import Modal from "../../Modal/Modal";
import cross from "../../../../icons/cross.svg"
export const TodoItem: FC<Todo> = ({ id, description, favorite, completed }: Todo) => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [saveEditorText, setSaveEditorText] = useState<string>(description)

    let postDate = new Date().toLocaleDateString();
    // const handleDeleteMenu = ():void => {
    //     dispatch(removeTodo(id));
    //     setModalActive(!modalActive);
    // }
    const handleSubmitText = (e: any):void => {
        // e.preventDefault();
        if (e.charCode === 13) {
            dispatch(editTodo({ text: saveEditorText, id: id }));
            setEditMode(!editMode);
        }
    }
    const handleGoEdit = ():void => {
        setMenuOpen(false);
        setEditMode(true)
    }
    return (
        <>
            <div className={editMode ? "list-item active" : "list-item"} key={id}>
                {editMode ?
                    (<textarea
                        name="editMode"
                        value={saveEditorText}
                        className="editMode"
                        onKeyPress={handleSubmitText}
                        onChange={e => setSaveEditorText(e.target.value)}
                        autoFocus
                        wrap="hard"
                        maxLength={160}
                    >
                    </textarea>)
                    :
                    (<p className="list-item-description">{description}</p>)
                }
                <div className="option-buttons">
                    <button className="star-btn" onClick={() => { dispatch(setTodoStatus({ completed: completed, favorite: !favorite, id: id })) }}>
                        {!favorite
                            ?
                            (<img className="star-pic" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt=""/>)
                            :
                            (<img className="star-pic" src="https://cdn-icons-png.flaticon.com/512/1828/1828614.png" alt=""/>)
                        }
                    </button>
                    <button className="check-btn" onClick={() => { dispatch(setTodoStatus({ completed: !completed, favorite: favorite, id: id })) }}>
                        {!completed
                            ?
                            (<img 
                                className="check-pic" 
                                src="https://cdn-icons.flaticon.com/png/512/232/premium/232461.png?token=exp=1635331920~hmac=2e3a809fa79a6e4f3d5dd70a0a66b200" 
                                alt=""
                                />)
                            :
                            (<img 
                                className="check-pic" 
                                src="https://cdn-icons.flaticon.com/png/512/232/premium/232444.png?token=exp=1635346301~hmac=fcc0b1c8a7643e19806f1f47624cee9c" 
                                alt=""
                                />)
                        }
                    </button>
                    <button className="menu-btn">
                        <img 
                            className="menu-pic" 
                            src="https://cdn-icons-png.flaticon.com/512/633/633684.png" 
                            alt="" 
                            onClick={() => setMenuOpen(true)} 
                        />
                    </button>

                    {menuOpen ?
                        <div className="menu" onClick={e => e.stopPropagation()}>
                            <img
                                className="close-menu"
                                onClick={() => setMenuOpen(false)}
                                src={cross}
                                alt="cross"
                            />
                            <button
                                className = "in-menu-btn"
                                onClick={() => { dispatch(setTodoStatus({ completed: completed, favorite: !favorite, id: id }));{setMenuOpen(false)}}}
                                >
                                {!favorite ? "В избранное" : "Убрать из избранного"} 
                            </button>
                            <button
                                className = "in-menu-btn" 
                                onClick={() => { dispatch(setTodoStatus({ completed: !completed, favorite: favorite, id: id }));
                                { setMenuOpen(false) } }}
                                >
                                {!completed ? "Выполнено" : "Вернуть в работу"}
                            </button>
                            <button
                                className = "in-menu-btn" 
                                onClick={handleGoEdit}
                                >
                                Редактировать
                            </button>
                            <br/>
                            <button
                                className = "in-menu-btn" 
                                onClick={() => setModalActive(true)}
                                >
                                Удалить
                            </button>
                        </div>
                        : null}
                </div>
            </div>
            <Modal
                postDate={postDate}
                modalText={description}
                id={id}
                active={modalActive}
                setActive={setModalActive} />
        </>);
}


