import { Input, Button } from "reactstrap";
import "./styles.css";
import { useState } from "react"
import { SharedModal } from "../../../../../shared/sharedModal";
import { SORT_FIELDS } from "../../../../../consts";

const SortSelect = ({ handleSort }) => {
  return (
    <Input name="sort" type="select" onChange={handleSort}>
      {SORT_FIELDS.map(({ value, label }) => {
        return (
          <option value={value} key={label}>
            {label}
          </option>
        );
      })}
    </Input>
  );
};

const SearchInput = ({ handleSearch }) => {
  return (
    <Input
      type="search"
      placeholder="Search"
      name="search"
      onChange={handleSearch}
    />
  );
};

export const HeadRight = ({  setFilterField }) => {

  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);

  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false)
    } else {
      setIsShowAddTaskModal(true)
    }
  }

  const handleSearch = (e) => {
    const { value } = e.target

    setFilterField(['search', value])
  }

  const handleSort = (e) => {
    const { value } = e.target

    setFilterField(['sort', value])
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
      <SortSelect  handleSort={handleSort} />
      <SearchInput  handleSearch={handleSearch}/>
      {isShowAddTaskModal && (<SharedModal
        onClose={() => {
          setIsShowAddTaskModal(false)
        }}  />)}
    </div>
  );
};
