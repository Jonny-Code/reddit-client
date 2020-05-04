import React, { useContext, useState } from "react";
import { ReactComponent as Mail } from "./svg/mail.svg";
import { moderatorsList } from "./ModeratorsList";
import "./Moderators.css";

export const Moderators: React.FC = () => {
  const [moderators, setModerators] = useState(moderatorsList);

  return (
    <div className="moderators-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 0 18px 0",
        }}
      >
        <h4 className="d-inline title-moderators">Moderators</h4>
        <Mail />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {moderators.map((i) => (
          <div
            style={{
              cursor: "pointer",
              color: "#4fbcff",
              fontSize: "12px",
              margin: "9px 0",
            }}
          >
            u/{i}
          </div>
        ))}
      </div>
      <h4
        style={{
          margin: "8px 6px 14px 0",
          fontSize: "13px",
          fontWeight: 600,
          fontFamily: "monospace",
          color: "#d7dadc",
          textAlign: "right",
        }}
      >
        VIEW ALL MODERATORS
      </h4>
    </div>
  );
};
