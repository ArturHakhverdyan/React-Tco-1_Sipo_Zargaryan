import "./styles.css";
import { HeadRight } from "./HeadRight";
export const Head = ({setFilterField}) => {
  return (
    <div className="main-section-head">
      <HeadRight  setFilterField={setFilterField} />
    </div>
  );
};
