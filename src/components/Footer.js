import React from "react";
import reactSpinner from "../media/reactSpinner.png";

const Footer = () => {
  return (
    <div className="nav bg-light fixed-bottom justify-content-center">
      <img id="loading" alt="" src={reactSpinner} />
    </div>
  );
};

export default Footer;
