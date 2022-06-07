

const initialState = {
    tasks: []
}

export const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TASKS': {
            // action.payload [{},{}]
            return {
                ...state,
                tasks: action.payload
            }
        }
        case 'REMOVE_MULTIPLE_TASKS': {
            const deletedTasksIds = action.payload
            const tasks = state.tasks.filter(task => !deletedTasksIds.includes(task._id))
            return {
                ...state,
                tasks
            }
        }
        case 'ADD_NEW_TASK': {
            const newTask = action.payload
            const tasks = [...state.tasks, newTask]
            return {
                ...state,
                tasks
            }
        }
        default:
            return state;
    }
}