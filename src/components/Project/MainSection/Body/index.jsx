import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import { CardComponent } from "../../CardComponent";
import { connect } from "react-redux";

import "./styles.css";
import {  deleteSingleCardThunk, removeMultipleTasksThunk,  taskStatusChangeThunk } from "../../../../redux/action/task-action";

export const ConnectedBody = ({ removeMultipleTasks, tasks, deleteSingleCard, taskStatusChange }) => {


  const taskStatusChangeHendler = useCallback((_id, status) => {
    taskStatusChange(_id,status)
    
  }, [taskStatusChange])


  const DeleteRequest = useCallback((_id) => {
    deleteSingleCard(_id)


  }, [deleteSingleCard])

  const [deletedTasksSet, setDeletedTasksSet] = useState(new Set())
  const toggleDeletedTask = useCallback((_id) => {
    setDeletedTasksSet((prev => {
      const newSet = new Set(prev)
      if (newSet.has(_id)) {
        newSet.delete(_id);
      } else { newSet.add(_id) }
      return newSet;
    }));

  }, [])

  const handleBatchDelete = () => {
    const batchDelTasks = Array.from(deletedTasksSet)
    removeMultipleTasks(batchDelTasks)
    setDeletedTasksSet(new Set())

  };
  return (

    <div>
      <div>
        {!!deletedTasksSet.size && <Button onClick={handleBatchDelete} color="primary">
          Delete All
        </Button>}

      </div>
      <div className="main-section-body">

        {tasks.map((todo) => {
          return <CardComponent key={todo._id}
            todo={todo}
            DeleteRequest={DeleteRequest}
            taskStatusChangeHendler={taskStatusChangeHendler}
            toggleDeletedTask={toggleDeletedTask}
          />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.taskReducerState.tasks
}) 

// dispatch version______________________________
// const mapDispatchToProps = (dispatch) => ({
//   removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksThunk(deletedTasksIds)),
//   deleteSingleCard: (taskId) => dispatch(deleteSingleCardThunk(taskId)),
//   taskStatusChange: (_id,taskStatus) => dispatch(taskStatusChangeThunk(_id,taskStatus))
// })

export const Body = connect(mapStateToProps, {
  removeMultipleTasks:removeMultipleTasksThunk,
  deleteSingleCard:deleteSingleCardThunk,
  taskStatusChange:taskStatusChangeThunk
})(ConnectedBody)
