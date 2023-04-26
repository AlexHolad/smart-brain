import React from "react";

import "./Logo.css"

import Tilt from "react-parallax-tilt";
import brain from "./brain.png"

export default function Logo() {
  return (
    <div className="ml4 mt0">
      <Tilt className="tilt br2 shadow-2 pa3" style={{ height: "100px", width:"100px"}}>
          <img src={brain} alt="logo" className="br2 shadow2 ma4 mt0"/>
      </Tilt>
      </div>
  );
}
