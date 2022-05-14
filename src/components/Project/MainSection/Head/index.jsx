import "./styles.css";
import { HeadRight } from "./HeadRight";
export const Head = ({setTasks}) => {
  return (
    <div className="main-section-head">
      <HeadRight setTasks = {setTasks}  />
    </div>
  );
};
