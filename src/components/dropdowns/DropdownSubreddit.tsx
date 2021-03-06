import React, { useContext } from "react";
import { SubredditContext } from "../../contexts/SubredditContext";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";
import "./DropdownSubreddit.css";

export const DropdownSubreddit: React.FC = () => {
  const { subreddit } = useContext(SubredditContext);

  return (
    <div className="dropdown-subreddit pointer">
      <img
        style={{
          maxHeight: "24px",
          maxWidth: "24px",
        }}
        src={subreddit.logoImgSrc}
        alt="subreddit-logo"
      />
      <h4 className="dropdown-subreddit-name">r/{subreddit.name}</h4>
      <DownArrow style={{ margin: "0 0 0 auto" }} />
    </div>
  );
};
