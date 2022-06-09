import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskReducer } from "./reducers/task-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    taskReducerState: taskReducer,
  });

  const middlewares = [thunk];
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(...middlewares)
  )