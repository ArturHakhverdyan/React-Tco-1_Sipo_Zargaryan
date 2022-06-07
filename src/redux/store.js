import { createStore, combineReducers } from 'redux'
import { taskReducer } from './reducers/task-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    taskReducerState: taskReducer
})

export const store = createStore(rootReducer, composeWithDevTools())