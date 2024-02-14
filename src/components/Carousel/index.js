import React from "react";
import classes from "./Carousel.module.css";
import Button from "../Button";

const Carousel = () => {
  return (
    <div className={classes["main-wrapper"]}>
      <h1 className={classes["main-heading"]}>
        100% Organic Tobacco
        <br />
        <span>Crafted </span>
        For health.
      </h1>
      <p className={classes["sub-heading"]}>
        Drinking healthier coffee is one of the easiest things you can do to
        boost your overall wellness and longevity.
      </p>
      <Button text="shop now" />
    </div>
  );
};

export default Carousel;
