import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = ({setTasks,tasks,setFilterField}) => {
 
  return (
    <div className="main-section">
      <Head setTasks = {setTasks} setFilterField={setFilterField}/>
      <Body tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
};

