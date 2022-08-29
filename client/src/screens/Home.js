import React from "react";
import Image from "../asset/code.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="main">
      <h1 className="title">Where to begin</h1>
      <img src={Image} className="image"></img>
    </div>
  );
};

export default Home;
