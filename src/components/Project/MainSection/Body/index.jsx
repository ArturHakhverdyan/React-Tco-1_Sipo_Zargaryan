import { useCallback } from "react";
import { CardComponent } from "../../CardComponent";
import "./styles.css";
export const Body = ({ tasks, setTasks }) => {

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
  
  return (
    <div className="main-section-body">
      {tasks.map((todo) => {
        return <CardComponent key={todo._id}
          todo={todo}
          tasks={tasks}
          setTasks={setTasks}
          DeleteRequest={DeleteRequest}
          taskStatusChangeHendler={taskStatusChangeHendler} />;
      })}
    </div>
  );
};