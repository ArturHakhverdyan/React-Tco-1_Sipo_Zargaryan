import { useCallback, useContext, useEffect, useState } from "react";
import { getTasksRequest } from "../../api";
import { TaskContext } from "../../context";
import { generateQuery } from "../../helpers";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  const {tasks} = useContext(TaskContext)
  const {setTasks} = useContext(TaskContext)
  const [queryObject, setQueryObject] = useState({})
  
  

  useEffect(() => {
    const query = generateQuery(queryObject);

    getTasksRequest(query).then((data) => {
      setTasks(data);
    });
  }, [queryObject]);


  const setFilterField = useCallback((filterEntries) => {


    const [name, value] = filterEntries;

    setQueryObject((prev) => {
      if (!value) {
        const newQueryObject = { ...prev };
        delete newQueryObject[name];
        return newQueryObject;
      }

      if (prev[name] !== value) {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  }, []);
  return (
    <div className="project-layout">
      <FilterSection tasks={tasks}
       setTasks={setTasks} 
       setFilterField = {setFilterField} />
      <MainSection tasks={tasks} setTasks={setTasks} setFilterField={setFilterField} />
    </div>
  );
};
