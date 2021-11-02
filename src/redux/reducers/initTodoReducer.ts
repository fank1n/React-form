import INITIALIZE_TODOS from "../actions/todoActions"

export const toDoReducer = (state = [], action:any ) => {
    switch(action.type) {
        case INITIALIZE_TODOS: {
            const items = action.payload
            return items
        }
    }
}



// export const saveTodos = () => (dispatch, getState) => { ///////////////из второго
//     const todos = getState().todos;
//     fetch("")
// }