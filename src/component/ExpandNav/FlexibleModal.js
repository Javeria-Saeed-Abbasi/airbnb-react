import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Image,
  InputGroup,
  ModalBody,
  Offcanvas,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExpandNavStyles.css";
import Month from "./Month";

const FlexibleModal = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Weekend', value: '1' },
      { name: 'Week', value: '2' },
      { name: 'Month', value: '3' },
    ];  
  return (
    <div>
      <div id="flexible" className="">
        <div className="flexi-content ">
        <div className="d-flex justify-content-center align-items-center">
            <span className="h5 py-3">Stay for a week</span>
          </div>
          <div className="flexi-btn d-flex justify-content-center align-items-center">
          <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
           
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            
          >
              
            {radio.name}

          </ToggleButton>
        ))}
   
      </ButtonGroup>
            {/* <ButtonGroup
              aria-label="Basic example mx-auto"
              className=""
            >
              <Button type="radio" variant="link" className="btn-date active">
                Weekend{" "}
              </Button>
              <Button variant="link" className="">
                Week
              </Button>
              <Button variant="link" className="">
                Month{" "}
              </Button>
            </ButtonGroup> */}
          </div>
       
          <div>
            <Month/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexibleModal;
