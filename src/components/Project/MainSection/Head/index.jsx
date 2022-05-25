import "./styles.css";
import { HeadRight } from "./HeadRight";
export const Head = ({setTasks,setFilterField}) => {
  return (
    <div className="main-section-head">
      <HeadRight setTasks = {setTasks} setFilterField={setFilterField} />
    </div>
  );
};
