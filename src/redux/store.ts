import { applyMiddleware, createStore, compose } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/addTodoReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = configureStore({
//   reducer: todosReducer,
// });

// export const store = createStore(
//   todosReducer, 
//   compose(applyMiddleware(ReduxThunk),     
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
// export const store = createStore(
//   todosReducer,
//   compose(
//       applyMiddleware(thunk),
//   )
// )
export const store = createStore(todosReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;