import React from "react";

import "./FaceRecognition.css";

function FaceRecognition({ input, box }) {
  return (
    <div className="center ma">
      <div className="mt2">
        <img id="inputimage" src={input} alt="" width="500px" height={"auto"} />
        <div
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
          className="bounding-box"
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
