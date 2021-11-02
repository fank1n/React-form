// import {getTodos} from "../api/todos";
import INITIALIZE_TODOS from "./actions/todoActions"

export interface ListItem {
    "id": number,
    "description": string,
    "completed": false,
    "favorite": false
}

export const getTodos = () => {
    return async (dispatch:any) => {
        const todos = await fetch ("http://localhost:8000/todo")
        .then((todos) => todos.json)
        .then((todos) => {
            dispatch({
                type: INITIALIZE_TODOS,
                payload: todos,
            })
        }).catch((error) => console.log(error))
    }
}

