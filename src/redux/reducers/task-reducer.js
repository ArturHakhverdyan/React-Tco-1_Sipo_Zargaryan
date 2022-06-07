

const initialState = {
    tasks: []
}

export const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TASKS': {
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
        case "DELETE_SINGLE_CARD": {
            const taskId = action.payload
            const tasks = state.tasks.filter(task => !taskId.includes(task._id))
            return {
                ...state,
                tasks
            }
        }
        case 'EDIT_TASK_ACTION': {
            const editTask = action.payload
            const tasks = state.tasks.map(task => task._id === editTask._id ? editTask :  task)
            return {
                ...state,
                tasks
            }
        }
        case 'TASK_STATUS_CHANGE' : {
            const taskStatus = action.payload
            const tasks = state.tasks.map(task => task._id ===taskStatus._id ? taskStatus: task )
            return {
                ...state,
                tasks
            }
        }
        default:
            return state;
    }
}