import React from "react";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";
import { ReactComponent as OnlineAccount } from "./svg/online-account.svg";
import { ReactComponent as Karma } from "./svg/karma.svg";
import "./DropdownUser.css";

export const DropdownUser: React.FC = () => {
  return (
    <div className="dropdown-user pointer">
      <OnlineAccount />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          margin: "0 0 0 2px",
        }}
      >
        <h4
          style={{
            color: "#dfe3e5",
            display: "inline",
            margin: "2px",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Jonny-Code
        </h4>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "2px 0 0 0",
          }}
        >
          <Karma />
          <h4
            style={{
              color: "#a8aaab",
              display: "inline",
              margin: "0 2px 0 0",
              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "Arial",
            }}
          >
            1 karma
          </h4>
        </div>
      </div>
      <DownArrow style={{ margin: "0 0 0 auto" }} />
    </div>
  );
};
