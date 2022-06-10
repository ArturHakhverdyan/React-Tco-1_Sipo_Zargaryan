import './styles.css'
import {  FILTER_DATE_PICKERS } from '../../../consts';
import { useCallback,  useState } from 'react';
import { DatePick } from '../../datePick';
import * as moment from "moment";
import { Button } from 'reactstrap';
import {  taskStatusThunk } from '../../../redux/action/task-action';
import { connect } from 'react-redux';

 const FilterSectionConnected = ({ setFilterField ,taskStatus}) => {
 
  const createdLte = useState(new Date());
  const createdGte = useState(new Date());
  const completedLte = useState(new Date());
  const completedGte = useState(new Date());

  const getFilterState = useCallback(
    (name) => {
      switch (name) {
        case "create_lte":
          return createdLte;
        case "create_gte":
          return createdGte;
        case "complete_lte":
          return completedLte;
        case "complete_gte":
          return completedGte;
        default:
          return null;
      }
    },
    [createdLte, createdGte, completedLte, completedGte]
  );
  
  const taskStatusHandler = (e) => {
    const status = e.target.innerHTML.toLowerCase()
    taskStatus(status)
  }

  return (
    <div className="filter-section">
      <div className='inner-filter-section'>
      {FILTER_DATE_PICKERS.map((pickerData, index) => {
        const [date, setDate] = getFilterState(pickerData.value);

        return (
          
          <div className='datapicker-section' key={index}>
            <span>{pickerData.label}</span>
            <span className='reset-pick'>   <i className='bx reset bxs-message-rounded-x'
              onClick={() => {
                setDate(new Date());
                setFilterField([pickerData.value, ""]);
              }}
            >
            </i></span>
            <DatePick
              startDate={date}
              setStartDate={(date) => {
                setDate(date);
                setFilterField([
                  pickerData.value,
                  moment(date).format("YYYY-MM-DD"),
                ]);
              }}
              name={pickerData.value}
            />
         
          </div>
         
        );
      })}

      <div className='status-section'>
        <p>Status</p>
        <div className='status-btn'>
        <Button style={{ margin: "10px" }} onClick={taskStatusHandler}>Done</Button>
        <Button onClick={taskStatusHandler}>Active</Button>
        </div>
        
      </div>
    </div>
    </div>
  );
};



 export const  FilterSection =connect(null,{
  taskStatus:taskStatusThunk 
 }
  ) (FilterSectionConnected)