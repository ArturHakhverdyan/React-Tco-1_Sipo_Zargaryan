import './styles.css'
import { BACKEND_URL, FILTER_DATE_PICKERS } from '../../../consts';
import { useCallback, useContext, useState } from 'react';
import { DatePick } from '../../datePick';
import * as moment from "moment";
import { Button } from 'reactstrap';
import { TaskContext } from '../../../context';

export const FilterSection = ({ setFilterField }) => {
  const {setTasks} = useContext(TaskContext)
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

  return (
    <div className="filter-section">
      {FILTER_DATE_PICKERS.map((pickerData, index) => {
        const [date, setDate] = getFilterState(pickerData.value);

        return (
          <div key={index}>
            <p>{pickerData.label}</p>
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
            <button
              onClick={() => {
                setDate(new Date());
                setFilterField([pickerData.value, ""]);
              }}
            >
              Reset
            </button>
          </div>
        );
      })}

      <div className='status-section'>
        <p>Status</p>
        <Button style={{ margin: "10px" }} onClick={Done}>Done</Button>
        <Button onClick={Active}>Active</Button>
      </div>
    </div>
  );
};




