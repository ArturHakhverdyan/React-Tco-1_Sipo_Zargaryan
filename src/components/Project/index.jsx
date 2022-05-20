import { useEffect, useState } from "react";
import { GetTasks } from "../../api";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    GetTasks()
      .then((data) => {
        setTasks(data)
      })
  }, [])
  return (
    <div className="project-layout">
      <FilterSection tasks={tasks} setTasks={setTasks} />
      <MainSection tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
