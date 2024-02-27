import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  feature1,
  feature2,
  feature3,
  feature4,
} from "../../constants/imagePaths";
import classes from "./Features.module.css";

const Features = () => {
  return (
    <>
      <Row className={`mx-0 ${classes["feature-wrapper"]}`}>
        <Col lg="3" md="3" sm="6" className={classes["feature-item"]}>
          <img alt="" src={feature1} className="" />
        </Col>
        <Col lg="3" md="3" sm="6" className={classes["feature-item"]}>
          <img alt="" src={feature2} className="" />
        </Col>
        <Col lg="3" md="3" sm="6" className={classes["feature-item"]}>
          <img alt="" src={feature3} className="" />
        </Col>
        <Col lg="3" md="3" sm="6" className={classes["feature-item"]}>
          <img alt="" src={feature4} className="" />
        </Col>
      </Row>
    </>
  );
};

export default Features;
