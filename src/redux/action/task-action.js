import { getTasksRequest } from "../../api"
import { BACKEND_URL } from "../../consts"

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
export const getTasksThunk = (query) => (dispatch, getState) => {
    getTasksRequest(query)
        .then(data => {
            dispatch(setTasksAction(data))
        })
}

export const addNewTaskThunk = (formData,onSubmitCallback) => (dispatch, getState) => {
    fetch(`${BACKEND_URL}/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(addNewTaskAction(data))
            onSubmitCallback();
        });
}

export const removeMultipleTasksThunk = (batchDelTasks) => (dispatch,getState) => {
    fetch(`${BACKEND_URL}/task`, {
        method: "PATCH",
        body: JSON.stringify({
          tasks: batchDelTasks,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(removeMultipleTasksAction(batchDelTasks))
        });
}

export const deleteSingleCardThunk = (_id) => (dispatch,getState) => {
    fetch(`http://localhost:3001/task/${_id}`, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(() => {
          dispatch(deleteSingleCardAction(_id))     
        })
}

export const taskStatusChangeThunk = (_id,status) => (dispatch) => {
    fetch(`http://localhost:3001/task/${_id}`, {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify({
          status,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(taskStatusChangeAction(data))
        });
}

export const editTaskThunk = (editableState,onSubmitCallback,formEdit) => (dispatch) => {
    fetch(`${BACKEND_URL}/task/${editableState._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEdit),
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch(editTaskAction(data))
            onSubmitCallback()
        })

}