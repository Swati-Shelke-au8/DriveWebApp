import React from "react";
import "./HomeStyle.css";

export const Home = () => {
  return (
    <div id="home">
      <div className="home-container">
        <h1>
          Moving people,
          <br /> and the world
        </h1>
        <div className="btn-container">
          <button className="SignUpButton">Sign Up</button>
          <button className="LoginButton">Login</button>
        </div>
      </div>
    </div>
  );
};
