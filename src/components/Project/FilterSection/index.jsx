import './styles.css'
import { Button } from "reactstrap";
import { BACKEND_URL } from '../../../consts';
import { DatePickCompletedGte, DatePickCompletedLte, DatePickCreateGte, DatePickCreateLte } from '../../datePick';
import { useCallback, useState } from 'react';

export const FilterSection = ({ setTasks, setFilterField }) => {

  const [createLte, setCreateLte] = useState(new Date())
  const [createGte, setCreateGte] = useState(new Date())
  const [completeLte, setCompleteLte] = useState(new Date())
  const [completeGte, setCompleteGte] = useState(new Date())

  const handleCreateLte = useCallback((date) => {
    setCreateLte(date)
    setFilterField(['create_lte', createLte])
  }, [createLte,setFilterField])

  const handleCreateGte = useCallback((date) => {
    setCreateGte(date)
    setFilterField(['create_gte', createGte])
  }, [createGte,setFilterField])

  const handleCompletedLte = useCallback((date) => {
    setCompleteLte(date)
    setFilterField(['complete_lte', completeLte])
  }, [completeLte,setFilterField])

  const handleCompletedGte =useCallback((date) => {
    setCompleteGte(date)
    setFilterField(['complete_gte', completeGte])
  },[completeGte,setFilterField])

  const Active = () => {
    fetch(`${BACKEND_URL}/task?status=done`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }
  const Done = () => {
    fetch(`${BACKEND_URL}/task?status=active`)
      .then(res => res.json())
      .then(data => setTasks(data))
  }



  return <div className="filter-section">
    <div className='status-section'>
      <p>Status</p>
      <Button style={{ margin: "10px" }} onClick={Done}>Done</Button>
      <Button onClick={Active}>Active</Button>

    </div>
    <div className='datapicer-section'>
      <span >create_lte:</span> < DatePickCreateLte createLte={createLte} handleCreateLte={handleCreateLte} />
      <span>create_gte:</span><DatePickCreateGte createGte={createGte} handleCreateGte={handleCreateGte} />
      <span>complete_lte:</span><DatePickCompletedLte completeLte={completeLte} handleCompletedLte={handleCompletedLte} />
      <span>complete_gte:</span><DatePickCompletedGte completeGte={completeGte} handleCompletedGte={handleCompletedGte} />
    </div>

  </div>;
};
