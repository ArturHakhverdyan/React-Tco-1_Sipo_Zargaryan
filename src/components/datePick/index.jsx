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

  export const DatePickCreateLte = ({ createLte, setCreateLte }) => {
    return (
      <DatePicker
        selected={createLte}
        onChange={(date) => setCreateLte(date)}
        dateFormat={"yyyy-mm-dd"}
      />
    );
  };

  export const DatePickCreateGte = ({ createGte, setCreateGte }) => {
    return (
      <DatePicker
        selected={createGte}
        onChange={(date) => setCreateGte(date)}
        dateFormat={"yyyy-mm-dd"}
      />
    );
  };

  export const DatePickCompletedLte = ({ completedLte, setCompletedLte }) => {
    return (
      <DatePicker
        selected={completedLte}
        onChange={(date) => setCompletedLte(date)}
        dateFormat={"yyyy-mm-dd"}
      />
    );
  };
  export const DatePickCompletedGte = ({ completedGte, setCompletedGte }) => {
    return (
      <DatePicker
        selected={completedGte}
        onChange={(date) => setCompletedGte(date)}
        dateFormat={"yyyy-mm-dd"}
      />
    );
  };

  