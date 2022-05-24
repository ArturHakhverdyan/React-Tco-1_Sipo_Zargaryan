import { Input, Button } from "reactstrap";
import "./styles.css";
import { useEffect, useState } from "react"
import { SharedModal } from "../../../../../shared/sharedModal";
import { BACKEND_URL } from "../../../../../consts";


const SortSelect = ({ onSortHandler }) => {


  return (
    <Input name="sort_by" type="select" onChange={onSortHandler}>
      <option>Sort by</option>
      <option value="creation_date_newest" >created newest</option>
      <option value="creation_date_oldest">Created oldest</option>
      <option value="completion_date_newest">completed newest</option>
      <option value="completion_date_oldest">completed oldest</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </Input>
  );
}



export const HeadRight = ({ setTasks }) => {

  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false);
  const [searchTask, setSearchTask] = useState(null);
  const [sortTask, setSortTask] = useState(null);

  const handleBtnClick = () => {
    if (isShowAddTaskModal) {
      setIsShowAddTaskModal(false)
    } else {
      setIsShowAddTaskModal(true)
    }
  }

  const onSearchHandler = (e) => {
    const { value } = e.target
    setSearchTask(value)
  }
  const onSortHandler = (e) => {
    const { value } = e.target
    setSortTask(value)
  }

  useEffect(() => {
    let url = ''
    if (searchTask && sortTask) {
      url = `${BACKEND_URL}/task/?sort=${sortTask}&search=${ searchTask}`
    } else if (searchTask) {
      url = (`${BACKEND_URL}/task/?search=${searchTask}`)

    } else if (sortTask) {
      url = (`${BACKEND_URL}/task/?sort=${sortTask}`)
    }

    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  }, [searchTask, sortTask,setTasks])



  return (
    <div className="main-section-head-right">
      <Button style={{ width: "100%" }}
        color="success"
        outline
        onClick={handleBtnClick}
      >
        Add New Task
      </Button>
      <SortSelect setTasks={setTasks} onSortHandler={onSortHandler} />
      <Input type="search" placeholder="Search" name="search" onChange={onSearchHandler}></Input>
      {isShowAddTaskModal && (<SharedModal
        onClose={() => {
          setIsShowAddTaskModal(false)
        }} setTasks={setTasks} />)}
    </div>
  );
};
