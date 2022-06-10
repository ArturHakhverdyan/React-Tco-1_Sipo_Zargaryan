import { useCallback,  useEffect, useState } from "react";
import { generateQuery } from "../../helpers";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";
import { setTasksThunk, } from "../../redux/action/task-action";
import { connect } from "react-redux";


export const ConnectedProject = ({setTasks}) => {
  const [queryObject, setQueryObject] = useState({})
  
  useEffect(() => {
    const query = generateQuery(queryObject);
    setTasks(query)
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

export const Project = connect(null, {
  setTasks: setTasksThunk
})(ConnectedProject)