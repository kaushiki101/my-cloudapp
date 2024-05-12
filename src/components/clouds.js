import React, { useState } from "react";
import Cloud from "../Asset/cloud.png";
import "./cloud.css";

export default function ColorChanger() {
  const [color, setColor] = useState("0");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="Main">
      <div className="Container" style={{ backgroundColor: color }}>
        <button>
          <div class="tooltip">
            Hover over me
            <span class="tooltiptext">
              Info : onclick on cloud the color of the backgroundas well as
              clouds
            </span>
          </div>
        </button>
        <div className="cloud-1">
          cloud-1
          <img
            onClick={() => changeColor("#8c8c8c")}
            className="cloud"
            src={Cloud}
            alt="cloud"
            style={{
              width: "250px",
              height: "210px",
            }}
          />
        </div>
        <div className="cloud-2">
          cloud-2
          <img
            onClick={() => changeColor("#ADD8E6")}
            className="cloud"
            src={Cloud}
            alt="cloud"
            style={{
              width: "250px",
              height: "210px",
            }}
          />
        </div>
        <div className="cloud-3">
          cloud-3
          <img
            onClick={() => changeColor("white")}
            className="cloud"
            src={Cloud}
            alt="cloud"
            style={{
              width: "250px",
              height: "210px",
            }}
          />
        </div>
        <div className="cloud-4">
          cloud-4
          <img
            onClick={() => changeColor("#ebfaf9")}
            className="cloud"
            src={Cloud}
            alt="cloud"
            style={{
              width: "250px",
              height: "210px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
