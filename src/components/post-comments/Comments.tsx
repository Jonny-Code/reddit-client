import React from "react";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

export const Comments: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80px",
        width: "100%",
        background: "#1a1a1b",
      }}
    >
      <div
        style={{
          margin: "0 10px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          className="hover-nav-btn pointer d-flex justify-content-center"
          style={{
            height: "24px",
            width: "28px",
            paddingTop: "2px",
          }}
        >
          <Arrow />
        </span>

        <span
          className="hover-nav-btn pointer d-flex justify-content-center"
          style={{
            height: "24px",
            width: "28px",
            paddingBottom: "3px",
          }}
        >
          <Arrow style={{ transform: "rotate(180deg)" }} />
        </span>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <h5
          style={{
            display: "inline",
            color: "rgb(215, 218, 220)",
            margin: "4px 0 0 0",
            fontSize: "12px",
            fontWeight: 300,
          }}
          className="hover-underline pointer"
        >
          albertowtf
        </h5>
        <h5
          style={{
            display: "inline",
            color: "#818384",
            margin: "4px 0 0 4px",
            fontSize: "12px",
            fontWeight: 300,
          }}
        >
          51 points · 3 months ago
        </h5>
      </div>
    </div>
  );
};
