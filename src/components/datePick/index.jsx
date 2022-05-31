import DatePicker from "react-datepicker";

export const DatePick = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};

export const DatePickCreateLte = ({ createLte, handleCreateLte }) => {
  return (
    <DatePicker
      selected={createLte}
      onChange= {handleCreateLte}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};

export const DatePickCreateGte = ({ createGte,handleCreateGte }) => {
  return (
    <DatePicker
      selected={createGte}
      onChange={handleCreateGte}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};

export const DatePickCompletedLte = ({ completeLte, handleCompletedLte}) => {
  return (
    <DatePicker
      selected={completeLte}
      onChange={handleCompletedLte}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};
export const DatePickCompletedGte = ({ completeGte, handleCompletedGte }) => {
  return (
    <DatePicker
      selected={completeGte}
      onChange={handleCompletedGte}
      dateFormat={"yyyy-mm-dd"}
    />
  );
};

