import { Input, Button } from "reactstrap";
import "./styles.css";
import { useState } from "react"
import { SharedModal } from "../../../../../shared/sharedModal";


const SortSelect = () => {
  return (
    <Input name="sort_by" type="select">
      <option>Sort By</option>
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>Todo at Newest</option>
    </Input>
  );
};

const SearchInput = () => {
  return <Input type="search" placeholder="Search" name="search"></Input>;
};

export const HeadRight = () => {

  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false)
    } else {
      setIsShowAddTaskModal(true)
    }
  }

  return (
    <div className="main-section-head-right">
      <Button style={{ width: "100%" }}
        color="success"
        outline
        onClick={handleBtnClick}
      >
        Add New Task
      </Button>
      <SortSelect />
      <SearchInput />
      {isShowAddTaskModal && (<SharedModal
        onClose={() => {
          setIsShowAddTaskModal(false)
        }} />)}
    </div>
  );
};
