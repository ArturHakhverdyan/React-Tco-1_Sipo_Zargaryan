import { useCallback, useContext, useEffect, useState } from "react";
import { getTasksRequest } from "../../api";
import { TaskContext } from "../../context";
import { generateQuery } from "../../helpers";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";

export const Project = () => {
  const {setTasks} = useContext(TaskContext)
  const [queryObject, setQueryObject] = useState({})
  
  

  useEffect(() => {
    const query = generateQuery(queryObject);

    getTasksRequest(query).then((data) => {
      setTasks(data);
    });
  }, [queryObject,setTasks]);


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
      <FilterSection 
       setFilterField = {setFilterField} />
      <MainSection  setFilterField={setFilterField} />
    </div>
  );
};
