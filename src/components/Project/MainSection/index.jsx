import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({setTasks,tasks}) => {
 
  return (
    <div className="main-section">
      <Head setTasks = {setTasks}/>
      <Body tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
};

