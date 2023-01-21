import React from "react";
import landingImg from "../../images/landing.jpg";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row pt-5 mb-5 flex-column-reverse  flex-md-row">
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="HomeContent">
              <p>
                You Can Shop <span>Online</span> Now
              </p>
              <p className="HomeContentP">Let's Plan Your Day, Stress Free !</p>
              <button className="btn ">Shop Now</button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="homeImg  ">
              <img src={landingImg} alt="landing" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
