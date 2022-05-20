import './styles.css'
import DatePicker from "react-datepicker";
import { Button } from "reactstrap";
import { useState } from 'react';
import { BACKEND_URL } from '../../../consts';

export const FilterSection = ({tasks,setTasks}) => {


const IsActive = () => {
  fetch(`${BACKEND_URL}/task?status=done`)
  .then(res => res.json())
  .then(data => setTasks(data) )
}
const IsDone = () => {
  fetch(`${BACKEND_URL}/task?status=active`)
  .then(res => res.json())
  .then(data => setTasks(data) )
}

  const Datepicer = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

  return <div className="filter-section">
    <div className='status-section'>
      <p>Status</p>
      <Button style={{ margin: "10px" }} onClick={IsDone}>Done</Button>
      <Button onClick={IsActive}>Active</Button>

    </div>
    <div className='datapicer-section'>
      <span >create_lte:</span><Datepicer />
      <span>create_gte:</span><Datepicer />
      <span>complete_lte:</span><Datepicer />
      <span>complete_gte:</span><Datepicer />
    </div>

  </div>;
};
