import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./SwiperStyle.css";
import{ ToggleButton,
    ToggleButtonGroup, ButtonGroup}from "react-bootstrap";
const Month = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Weekend', value: '1' },
      { name: 'Week', value: '2' },
      { name: 'Month', value: '3' },
    ]; 
  return (
    <div>
      <div className="monthCard bg-danger">
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
          
            <SwiperSlide>  <div className="slides bg-secondary" style={{width:"120px", height:"134px"}}>
            <ButtonGroup className="mb-2">
      
   
      </ButtonGroup>
      </div></SwiperSlide>
            
                {/* <SwiperSlide>  <div className="slides bg-secondary" style={{width:"120px", height:"134px"}}>
                SLide 2</div></SwiperSlide>
                <SwiperSlide>  <div className="slides bg-secondary" style={{width:"120px", height:"134px"}}>
                SLide 3</div></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Month;
