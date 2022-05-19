import { Input, Button } from "reactstrap";
import "./styles.css";
import {  useState } from "react"
import { SharedModal } from "../../../../../shared/sharedModal";
import { BACKEND_URL } from "../../../../../consts";


const SortSelect = ({setTasks,onSortHandler}) => {


  return (
    <Input name="sort_by" type="select" onChange={onSortHandler}>
      <option value="creation_date_newest" >created newest</option>
      <option value="creation_date_oldest">Created oldest</option>
      <option value="completion_date_newest">completed newest</option>
      <option value="completion_date_oldest">completed oldest</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </Input>
  );
};



export const HeadRight = ({setTasks}) => {



  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false)
    } else {
      setIsShowAddTaskModal(true)
    }
  }

  ////dasi jamin
  const [searchValue,setSearchValue] = useState(null)
  const [sortValue,setSortValue] = useState(null)


  const onSearch = (e) => {
    setSearchValue(e.target.value)
    fetch(`${BACKEND_URL}/task?search=${e.target.value}`)
    .then((res ) => res.json())
    .then((data) => setTasks(data))

 }

 const onSortHandler = (e)=> {
  const {value} = e.target


  fetch(`${BACKEND_URL}/task?sort=${value}`)
  .then(res=>res.json())
  .then(data=> setTasks(data))
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
      <SortSelect setTasks={setTasks}  onSortHandler={onSortHandler}/>
      <Input type="search" placeholder="Search" name="search" onChange={onSearch}></Input>;
      {isShowAddTaskModal && (<SharedModal
        onClose={() => {
          setIsShowAddTaskModal(false)
        }} setTasks = {setTasks }/>)}
    </div>
  );
};
