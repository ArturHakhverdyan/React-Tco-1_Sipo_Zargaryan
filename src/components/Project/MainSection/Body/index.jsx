import { TODO_LIST_MOCK_DATA } from "../../../../mockdata";
import { CardComponent } from "../../CardComponent";
import "./styles.css";
export const Body = () => {
  return (
    <div className="main-section-body">
      {TODO_LIST_MOCK_DATA.map((todo) => {
        return <CardComponent key={todo._id} todo={todo} />;
      })}
    </div>
  );
};
