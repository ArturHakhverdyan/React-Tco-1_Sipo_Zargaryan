import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { taskReducer } from "./reducers/task-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    taskReducerState: taskReducer,
  });

  const middlewares = [thunk];
  
  export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), composeWithDevTools())
  );
  