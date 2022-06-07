import DatePicker from "react-datepicker";

export const DatePick = ({ startDate, setStartDate,name }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date,name)}
    />
  );
};

