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
    const [radioValue, setRadioValue] = useState('Week');

    const radios = [
      { id:'0', 
      name: 'Weekend', 
      value: 'Weekend' },

      { id:'1', 
        name: 'Week',
       value: 'Week' },

      { id:'2', 
        name: 'Month',
       value: 'Month' },
    ];  

  return (
    <div>
      <div id="flexible" className="">
        <div className="flexi-content ">
        <div className="d-flex justify-content-center align-items-center">
            <span className="h5 py-3">Stay for a {radioValue}</span>
          </div>
          <div className="flexi-btn d-flex justify-content-center align-items-center">
          <ButtonGroup className="mb-2">
             {radios.map((element, index) => (
              <label key={index}>
              <input  type="radio" name="radio"  id={`radio-${index}`} value={element.value}
               className="card-input-element"
                          checked={radioValue === element.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                          onClick={() => setRadioValue(element.name)}/>
    
                <div className="panel panel-default card-input">
                  <div className="panel-heading">{element.name}</div>
                </div>
               
            </label>
             )
             )}
        {/* {radios.map((radio, idx) => (
        
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
        ))} */}
   {/* <Button>
                  <label>
          <input type="radio" name="product" class="card-input-element" />

            <div class="panel panel-default card-input">
              <div class="panel-heading">Product A</div>
              <div class="panel-body">
                Product specific content
              </div>
            </div>

        </label>
                  </Button>
                  <Button>
                  <label>
          <input type="radio" name="product" class="card-input-element" />

            <div class="panel panel-default card-input">
              <div class="panel-heading">Product C</div>
              <div class="panel-body">
                Product specific content
              </div>
            </div>
        </label>
                  </Button> */}
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
