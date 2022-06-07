export const setTasksAction = (tasks) => {
    return {
        type: "SET_TASKS",
        payload:tasks
    }
}

export const removeMultipleTasksAction = (taskIds) => {
    return {
        type:"REMOVE_MULTIPLE_TASKS",
        payload:taskIds
    }
}

export const addNewTaskAction = (newTask) => {
    return {
        type: "ADD_NEW_TASK",
        payload:newTask
    }
}