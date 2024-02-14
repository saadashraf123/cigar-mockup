import React from "react";
import NavBar from "../Navbar";
import Carousel from "../Carousel";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["main-wrapper"]}>
        <NavBar />
        <Carousel />
      </div>
    </div>
  );
};

export default HeroSection;
