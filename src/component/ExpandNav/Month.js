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

const Month = () => {
  // const dateToFormat = '2022-11-28T12:59-0500';
  const [check, setcheck] = useState("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Weekend", value: "1" },
    { name: "Week", value: "2" },
    { name: "Month", value: "3" },
  ];

  return (
    <div>
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
          <SwiperSlide>
            <div className="card">
            <label>
              <InputGroup type="radio" name="test" id="test" value="business" />
              <div
                className="slides"
                style={{ width: "120px", height: "134px" }}
              >
                <div className="slide-content">
                  <div className="cal-icon text-white">
                    <Image src={Calendaricon} alt="calendar-icon" />
                  </div>
                  <p className="text-dark month">December</p>
                  <p className="text-dark dates">2022</p>
                </div>
              </div>
            </label>
            </div>

           
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
            <label>
              <InputGroup type="radio" name="test" id="test" value="business" />

            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">January</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
            </label>
            </div>
       
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">Feburary</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">March</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">April</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">May</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">June</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">July</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">August</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">September</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">October</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">November</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slides" style={{ width: "120px", height: "134px" }}>
              <div className="slide-content">
                <div className="cal-icon text-white">
                  <Image src={Calendaricon} alt="calendar-icon" />
                </div>
                <p className="text-dark month">December</p>
                <p className="text-dark dates">2023</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Month;
