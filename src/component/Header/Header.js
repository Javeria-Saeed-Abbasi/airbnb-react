import React from "react";
import { Button, Container } from "react-bootstrap";
import "./HeaderStyles.css";
import Img1 from "../../component/assets/images/video-thumb.webp";
import { TbMinusVertical } from "react-icons/tb";
const Header = () => {
  let iconStyles = { height: "30px", fontSize:"3rem" ,color:"grey" };

  return (
    <div className="header">
      <>
        <div className="release">
          <Container>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="justify-content-start py-3">
                <h1>Introducing our 2022 Winter Release</h1>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <div className="img1">
                  <img src={Img1} alt="my image" />
                </div>
                <div className="video1 py-3">
                  <Button variant="link" className="">Play the film</Button>               
                </div>
                <div className="border-right"></div>
                {/* <span className="minusVertical">
                    <TbMinusVertical  className="" style={iconStyles}  />
                  </span> */}
                <span className="explore-btn">
                  <Button variant="link" className="">Explore what's New</Button>
                </span>
              </div>
            </div>
          </Container>
        </div>
      </>
    </div>
  );
};

export default Header;
