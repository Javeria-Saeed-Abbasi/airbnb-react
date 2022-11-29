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

const cardStyle = {
  width: "5rem",
  height: "5rem",
  background: "red",
  margin: "1rem"
};

const cardSelect = {
  boxShadow: "2px 4px 30px 0px rgba(0, 0, 0, 0.75)"
};

const Month = () => {
  // const dateToFormat = '2022-11-28T12:59-0500';
  const [selectedMonth, setSelectedMonth] = useState("false");
  const [check, setcheck] = useState("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Weekend", value: "1" },
    { name: "Week", value: "2" },
    { name: "Month", value: "3" },
  ];
const months = [
  {
    id:0,
    name:"December",
    year:"2022"
  },
  {
    id:1,
    name:"January",
    year:"2023"
  },
  {
    id:2,
    name:"Feburary",
    year:"2023"
  },
  {
    id:3,
    name:"March",
    year:"2023"
  },
  {
    id:4,
    name:"April",
    year:"2023"
  },
  {
    id:5,
    name:"May",
    year:"2023"
  },
  {
    id:6,
    name:"June",
    year:"2023"
  },
  {
    id:7,
    name:"July",
    year:"2023"
  },
  {
    id:8,
    name:"August",
    year:"2023"
  },
  {
    id:9,
    name:"September",
    year:"2023"
  },
  {
    id:10,
    name:"October",
    year:"2023"
  },
  {
    id:11,
    name:"November",
    year:"2023"
  },
  {
    id:12,
    name:"December",
    year:"2023"
  },
]

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center pt-3">
        <span className="h6">Go anytime</span>
      </div>
      <div className="monthCard">
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
         {months.map((element, index) =>
                <SwiperSlide key={index}>
                 <label>
                <InputGroup
                  type="radio"
                  name="test"
                  id="test"
                  value="business"
                  className="monthly-cal"
                />

                <div
                  className="slides"
                  style={{ width: "120px", height: "100px" }}
                >
                  <div className="slide-content">
                    <div className="cal-icon text-white">
                      <Image src={Calendaricon} alt="calendar-icon" />
                    </div>
                    <p className="text-dark month">{element.name}</p>
                    <p className="text-dark dates">{element.year}</p>
                  </div>
                </div>
              </label>
                </SwiperSlide>
                )}
             
        </Swiper>
      </div>
    </div>
  );
};

export default Month;
