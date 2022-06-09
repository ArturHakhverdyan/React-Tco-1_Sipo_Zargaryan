import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import { BACKEND_URL } from "../../../../consts";
import { CardComponent } from "../../CardComponent";
import { connect } from "react-redux";

import "./styles.css";
import { deleteSingleCardAction, deleteSingleCardThunk, removeMultipleTasksThunk, taskStatusChangeAction, taskStatusChangeThunk } from "../../../../redux/action/task-action";

export const ConnectedBody = ({ removeMultipleTasks, tasks, setTasks, deleteSingleCard, taskStatusChange }) => {


  const taskStatusChangeHendler = useCallback((_id, status) => {

    fetch(`http://localhost:3001/task/${_id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        taskStatusChange(data)
      });
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
const mapDispatchToProps = (dispatch) => ({
  removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksThunk(deletedTasksIds)),
  deleteSingleCard: (taskId) => dispatch(deleteSingleCardThunk(taskId)),
  taskStatusChange: (taskStatus) => dispatch(taskStatusChangeThunk(taskStatus))
})

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody)
