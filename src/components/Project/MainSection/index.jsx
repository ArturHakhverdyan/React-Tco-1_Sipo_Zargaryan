import { useEffect, useState } from "react";
import { GetTasks } from "../../../api";
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const MainSection = () => {
  const [tasks, setTasks] = useState([])

  useEffect (() => {
    GetTasks().then((data ) => {
     setTasks(data)
   })
  },[])
  return (
    <div className="main-section">
      <Head setTasks = {setTasks}/>
      <Body tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
};

