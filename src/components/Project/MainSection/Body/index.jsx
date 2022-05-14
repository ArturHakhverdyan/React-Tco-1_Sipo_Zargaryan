import { CardComponent } from "../../CardComponent";
import "./styles.css";
export const Body = ({ tasks , setTasks }) => {
  return (
    <div className="main-section-body">
      {tasks.map((todo) => {
        return <CardComponent key={todo._id} todo={todo} tasks={tasks} setTasks={setTasks} />;
      })}
    </div>
  );
};