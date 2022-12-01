import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./SwiperStyle.css";
import {
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
  Image,
  Form,
  FormCheck,
  InputGroup,
} from "react-bootstrap";
import Calendaricon from "../../component/assets/images/calender-icon.jpg";
import Calendaricon2 from "../../component/assets/images/calender-icon2.jpg";



const Month = () => {
  // const dateToFormat = '2022-11-28T12:59-0500';
  const [selectedMonth, setSelectedMonth] = useState("false");
  const [check, setcheck] = useState("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [calIcon, setCalIcon] = useState ('');


  const months = [
    {
      id: 0,
      name: "December",
      year: "2022",
      value: "December",
    },
    {
      id: 1,
      name: "January",
      year: "2023",
      value: "January",
    },
    {
      id: 2,
      name: "Feburary",
      year: "2023",
      value: "Feburary",
    },
    {
      id: 3,
      name: "March",
      year: "2023",
      value: "March",
    },
    {
      id: 4,
      name: "April",
      year: "2023",
      value: "April",
    },
    {
      id: 5,
      name: "May",
      year: "2023",
      value: "May",
    },
    {
      id: 6,
      name: "June",
      year: "2023",
      value: "June",
    },
    {
      id: 7,
      name: "July",
      year: "2023",
      value: "July",
    },
    {
      id: 8,
      name: "August",
      year: "2023",
      value: "August",
    },
    {
      id: 9,
      name: "September",
      year: "2023",
      value: "September",
    },
    {
      id: 10,
      name: "October",
      year: "2023",
      value: "October",
    },
    {
      id: 11,
      name: "November",
      year: "2023",
      value: "November",
    },
    {
      id: 12,
      name: "December",
      year: "2023",
      value: "December",
    },
  ];

  return (
    <div>
 
      <div className="monthCard">
      <div className="d-flex justify-content-center align-items-center pt-3">
        <span className="h-6">Go anytime</span>
      </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
            
      
           
              <div className="months-data flexi-btn d-flex justify-content-center align-items-center">
                <ButtonGroup className="">
                {months.map((element, index) => (
                <SwiperSlide   key={index}>
                  <div className="card-input-element1">
                
                  <label>
                    <input
                   
                      type="checkbox"
                      name="months"
                      id={`custom-checkbox-${index}`}
                      value={element.value}
                      className="monthly-cal card-input-element"
                      checked={checked[index]}
                      onChange={(e) =>{setChecked(e.currentTarget.checked); }}
                      onClick={() => {setRadioValue(element.name); 
                        if (calIcon.includes(index)) {
                      const temp = calIcon.filter((element)=>
                        element!== index
                      )
                          setCalIcon([...temp])
                        }
                        else{
                          setCalIcon([...calIcon,index])}}
                        }
                       
                    />
                    <div
                      className="slides card-input1"
                    
                    >
                      <div className="slide-content panel panel-default">
                        <div className="cal-icon text-white">
                        {calIcon.includes(index)? <Image src={Calendaricon2} alt="calendar-icon" /> : <Image src={Calendaricon} alt="calendar-icon" /> }
                          {/* <Image src={Calendaricon} alt="calendar-icon" />
                          <Image src={Calendaricon2} alt="calendar-icon" /> */}
                        </div>
                        <p className="text-dark month">{element.name}</p>
                        <p className="text-dark dates">{element.year}</p>
                      </div>
                    </div>
                  </label>
          
                    </div>
                    </SwiperSlide>
                      ))}
                </ButtonGroup>
              </div>
           
        
        </Swiper>
      </div>
    </div>
  );
};

export default Month;
