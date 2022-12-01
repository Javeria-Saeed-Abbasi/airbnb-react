import React, { useState } from "react";
import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import "./ExpandNavStyles.css";
import { ButtonGroup } from "react-bootstrap";

const DatePickerComp = () => {
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("Week");

  const radios = [
    { id: "0", name: "Exact dates", value: "Exact dates" },

    { id: "1", name: "1 day", value: "1 day" },

    { id: "2", name: "2 day", value: "2 day" },

    { id: "3", name: "3 day", value: "3 day" },

    { id: "7", name: "7 day", value: "7 day" },
  ];

  return (
    <div>
      <div id="dates">
        <DatePicker disablePreviousDays style={{ padding: "124px 58px" }} />
 
      </div>
      <div className="days-btn flexi-btn">
               <ButtonGroup className="mb-2">
                 {radios.map((element, index) => (
                   <label key={index}>
                     <input
                       type="radio"
                       name="radio"
                       id={`radio-${index}`}
                       value={element.value}
                       className="card-input-element"
                       checked={radioValue === element.value}
                       onChange={(e) => setRadioValue(e.currentTarget.value)}
                       onClick={() => setRadioValue(element.name)}
                     />
       
                     <div className="panel panel-default card-input">
                       <div className="panel-heading">
                         {index !== 0 ? <span> &#177; </span> : null} {element.name}
                       </div>
                     </div>
                   </label>
                 ))}
               </ButtonGroup>
               </div>
    </div>
  );
};

export default DatePickerComp;
