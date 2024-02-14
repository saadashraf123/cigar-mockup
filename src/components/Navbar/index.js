import React from "react";
import classes from "./Navbar.module.css";

import {
  logo,
  profile,
  search,
  shoppingcart,
} from "../../constants/imagePaths";
import Button from "../Button";

const NavBar = () => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <div className={classes["nav-item-wrapper"]}>
        <span>HOME</span>
        <span>ABOUT</span>
        <span>PRODUCT</span>
        <span>BLOG</span>
      </div>
      <div className={classes["logo-wrapper"]}>
        <img
          alt=""
          src={logo}
          width="24"
          height="24"
          className="d-inline-block align-top"
        />
      </div>
      <div className={classes["nav-actions-wrapper"]}>
        <span>
          <img
            alt=""
            src={search}
            width="24"
            height="24"
            className="d-inline-block align-top"
          />
        </span>
        <span>
          <img
            alt=""
            src={profile}
            width="24"
            height="24"
            className="d-inline-block align-top"
          />
        </span>
        <span>
          <img
            alt=""
            src={shoppingcart}
            width="24"
            height="24"
            className="d-inline-block align-top"
          />
        </span>
        <Button text="Contact Now" />
      </div>
    </div>
  );
};

export default NavBar;
