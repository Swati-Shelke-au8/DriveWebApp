import React from "react";
import "./Ride.css";
import leftArrow from "../assets/images/LeftArrow.svg";
import rightArrow from "../assets/images/RightArrow.svg";
import needDrive from "../assets/images/needDrive.svg";
import sectionImg from "../assets/images/section1.svg";
import sectionImg1 from "../assets/images/section2.svg";
import orderRide from "../assets/images/undraw_order_ride.svg";
import sectionImg2 from "../assets/images/section3.svg";
import videoPlay from "../assets/images/playVideo.svg";

export const Ride = () => {
  return (
    <div id="ride">
      <div className="container-fluid ride-container">
        <div className="row">
          <h1>What is Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row img-div">
          <div className="col-11"></div>
          <div className="col-1">
            <img
              src={leftArrow}
              alt="leftArrow"
              height="20px"
              width="20px"
              style={{ marginRight: "1rem" }}
            />
            <img src={rightArrow} alt="rightArrow" height="20px" width="20px" />
          </div>
        </div>
      </div>
      <div className="container-fluid middle-div">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <img
              src={needDrive}
              alt="middleSction"
              style={{ width: "40%", height: "auto", marginLeft: "-60%" }}
            />
            <h1>
              Drive when you want,
              <br />
              <span>make what you need</span>
            </h1>
            <p>
              Make money on your schedule with deliveries or rides—or both.
              <br />
              You can use your own car or choose a rental through Uber.
            </p>
            <button className="getStartedBtn">Get Started</button>
          </div>
          <div className="col-sm-5 col-md-6">
            <img
              src={sectionImg}
              alt="needDrive"
              className="needDrive"
              style={{ width: "70%", height: "auto", margin: "10% 0%" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid middle-div">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <img
              src={orderRide}
              alt="needDrive"
              className="orderRide"
              style={{ width: "70%", height: "auto", margin: "10% 0%" }}
            />
          </div>
          <div className="col-sm-5 col-md-6">
            <img
              src={sectionImg1}
              alt="middleSction"
              style={{ width: "40%", height: "auto", marginLeft: "-60%" }}
            />
            <h1>
              Making innovations
              <br />
              <span>since 2011</span>
            </h1>
            <p>
              Make money on your schedule with deliveries or rides—or both.
              <br />
              You can use your own car or choose a rental through Uber.
            </p>
            <button className="getStartedBtn">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container-fluid middle-div section-third">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <img
              src={sectionImg2}
              alt="middleSction"
              style={{ width: "40%", height: "auto", marginLeft: "-60%" }}
            />
            <h1>
              Make money by renting
              <br />
              <span>out your car</span>
            </h1>
            <p>
              Make money on your schedule with deliveries or rides
              <br />
              You can use your own car or choose a rental through
            </p>
          </div>
          <div className="col-sm-5 col-md-6">
            <img
              src={videoPlay}
              alt="videoPlay"
              className="videoPlay"
              style={{ width: "70%", height: "auto", margin: "10% 0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
