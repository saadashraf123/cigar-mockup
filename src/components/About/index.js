import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./About.module.css";
import { cigar, cigarSmoke, play } from "../../constants/imagePaths";
import Button from "../Button";
const About = () => {
  return (
    <Row className={`${classes["about-wrapper"]}`}>
      <Col lg="6" md="6" sm="12" className={`${classes["about-image"]}`}>
        <img alt="" src={cigarSmoke} className="" />
        <img alt="" src={cigar} className="" />
      </Col>
      <Col lg="6" md="6" sm="12" className={`${classes["about-desciption"]}`}>
        <h3>Discover the World of high quality Cigar Products</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions.{" "}
        </p>
        <div className={`${classes["about-action"]}`}>
          <img alt="" src={play} className="" />
          {/* <span className={`${classes["about-action-span"]}`}></span> */}
          <Button className={`${classes["about-button"]}`} text="View More" />
        </div>
      </Col>
    </Row>
  );
};

export default About;
