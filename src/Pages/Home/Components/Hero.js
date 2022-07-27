import React from "react";
import { Link } from "react-router-dom";
import video from "../../../assets/space.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted></video>

      <div className="content">
        <h1>Travel. Galaxies.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          corrupti!
        </p>

        <div className="buttons">
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Launch!</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
