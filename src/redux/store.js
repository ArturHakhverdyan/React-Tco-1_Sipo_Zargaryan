import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskReducer } from "./reducers/task-reducer";
import thunk from "redux-thunk";
import { authReducer,  } from "./reducers/auth-reducer";

const rootReducer = combineReducers({
    taskReducerState: taskReducer,
    authReducerState:authReducer
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