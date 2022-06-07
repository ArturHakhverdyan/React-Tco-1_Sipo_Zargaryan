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
export const deleteSingleCardAction = (taskId) => {
    return {
        type: "DELETE_SINGLE_CARD",
        payload:taskId
    }
}

export const editTaskAction = (newTask) => {
    return {
        type: "EDIT_TASK_ACTION",
        payload:newTask
    }
}
export const taskStatusChangeAction = (taskId) => {
    return {
        type: "TASK_STATUS_CHANGE",
        payload:taskId
    }
}
