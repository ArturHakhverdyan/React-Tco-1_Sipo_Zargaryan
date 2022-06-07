import { useCallback,  useState } from "react";
import { Button } from "reactstrap";
import { BACKEND_URL } from "../../../../consts";
import { CardComponent } from "../../CardComponent";
import { connect } from "react-redux";

import "./styles.css";
import { removeMultipleTasksAction } from "../../../../redux/action/task-action";

export const ConnectedBody = ({removeMultipleTasks,tasks,setTasks}) => {
  

  const taskStatusChangeHendler = useCallback((_id, status) => {

    fetch(`http://localhost:3001/task/${_id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        status,
      }),
    })
      .then((res) => res.json())
      .then((task) => {
        setTasks(prev => {
          return prev.map(item => {
            if (item._id === task._id) {
              return task
            }
            return item
          })
        })
      });
  }, [setTasks])


  const DeleteRequest = useCallback((_id) => {
    fetch(`http://localhost:3001/task/${_id}`, {
      method: "DELETE",
    })
      .then(res => {
        setTasks(prev =>
          prev.filter(task => {
            return task._id !== _id
          }))
      })

  }, [setTasks])

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
    fetch(`${BACKEND_URL}/task`, {
      method: "PATCH",
      body: JSON.stringify({
        tasks: batchDelTasks
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then((res) => res.json())
      .then((data) => {
        removeMultipleTasks(batchDelTasks)
      });
      setDeletedTasksSet(new Set())

  };
  return (

<div>
    <div>
    {!!deletedTasksSet.size && <Button onClick={handleBatchDelete} color = "primary">
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
  removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksAction(deletedTasksIds))
  // {type:'REMOVE_MULTIPLE_TASKS' , payload:deletedTasksIds}
})

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody)
