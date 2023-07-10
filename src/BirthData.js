import { useState, useEffect } from "react";
import Input from "./Input";

function BirthData({ setBirthDate }) {
  const currentYear = new Date().getFullYear();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const handleDayChange = ({ target: { value } }) => {
    setDay(value);
    if (value !== "" && (value < 1 || value > 31)) {
      setDayError("The day is incorrect");
    } else {
      setDayError("");
    }
  };
  const handleMonthChange = ({ target: { value } }) => {
    setMonth(value);
    if (value !== "" && (value < 1 || value > 12)) {
      setMonthError("The month is incorrect");
    } else {
      setMonthError("");
    }
  };

  const handleYearChange = ({ target: { value } }) => {
    setYear(value);
    if (value !== "" && value < 1900) {
      setYearError("The year is incorrect");
    } else if (value > currentYear) {
      setYearError("The year cannot be in future");
    } else {
      setYearError("");
    }
  };

  const isAllInputsFilled = Boolean(day) && Boolean(month) && Boolean(year);
  const isBirthDateCorrect =
    dayError === "" && monthError === "" && yearError === "";
  useEffect(() => {
    if (isAllInputsFilled && isBirthDateCorrect) {
      setBirthDate(new Date(`${year}-${month}-${day}`));
    } else {
      setBirthDate(null);
    }
  }, [isAllInputsFilled, isBirthDateCorrect]);

  return (
    <div className="user-data">
      <Input
        name="day"
        placeholder="DD"
        value={day}
        onChange={handleDayChange}
        error={dayError}
      />
      <Input
        name="month"
        placeholder="MM"
        value={month}
        onChange={handleMonthChange}
        error={monthError}
      />
      <Input
        name="year"
        placeholder="DD"
        value={year}
        onChange={handleYearChange}
        error={yearError}
      />
    </div>
  );
}

export default BirthData;
