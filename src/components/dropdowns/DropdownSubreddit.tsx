import React, { useContext } from "react";
import { SubredditContext } from "../../contexts/SubredditContext";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";
import "./DropdownSubreddit.css";

export const DropdownSubreddit: React.FC<{
  color: string;
  size: { x: number; y: number };
}> = (props) => {
  const { subreddit } = useContext(SubredditContext);

  return (
    <div
      style={{
        background: props.color,
        height: `${props.size.y}px`,
        width: `${props.size.x}px`,
      }}
      className="dropdown-subreddit pointer"
    >
      <img
        style={{
          maxHeight: "24px",
          maxWidth: "24px",
        }}
        src={subreddit.logoImgSrc}
        alt="subreddit-logo"
      />
      <h4
        style={{
          color: "#dfe3e5",
          display: "inline",
          margin: "2px 4px 0 4px",
          height: "18px",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        r/{subreddit.name}
      </h4>
      <DownArrow style={{ margin: "0 0 0 auto" }} />
    </div>
  );
};
