import React from "react";
import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import "./ExpandNavStyles.css";

const DatePickerComp = () => {
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();
  return (
    <div>
      <div id="dates">
        <DatePicker disablePreviousDays style={{ padding: "124px 58px" }} />
      </div>
    </div>
  );
};

export default DatePickerComp;
