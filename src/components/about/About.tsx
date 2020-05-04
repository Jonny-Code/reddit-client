import React, { useContext, useState, useEffect } from "react";
import { ReactComponent as Cake } from "./svg/cake.svg";
import { SubredditContext } from "../../contexts/SubredditContext";
import { Subreddit, SubredditModel } from "../../contexts/Subreddit";
import { abbreviateNumber } from "../../util/AbbreviateNumber";
import "./About.css";

export const About: React.FC = () => {
  const { subreddit } = useContext(SubredditContext);
  const [subredditContent, setSubredditContent] = useState<Subreddit>(
    SubredditModel
  );

  useEffect(() => {
    if (!Array.isArray(subreddit)) {
      setSubredditContent(subreddit);
    }
    console.log(subredditContent);
  });

  return (
    <div className="about-container">
      <h4 className="title-about">About Community</h4>
      <h4 className="text-lighter fs-15 font-weight-lighter m-0 pt-5">
        The {subredditContent.name} community on Reddit
      </h4>
      <div className="d-flex pt-3 pr-2">
        <div className="flex-2">
          <h4 className="d-flex align-items-center font-weight-light text-lighter fs-17 m-0">
            {abbreviateNumber(subredditContent.memberCount, 0)}
          </h4>
          <h6 className="m-0 pt-1 fs-13 font-weight-light text-lighter">
            Members
          </h6>
        </div>
        <div className="flex-2 pl-4">
          <h4 className="d-flex align-items-center font-weight-light text-lighter fs-17 m-0">
            {subredditContent.membersOnline}
          </h4>
          <h6 className="m-0 pt-1 fs-13 font-weight-light text-lighter">
            Online
          </h6>
        </div>
        <div className="flex-1"></div>
      </div>
      <hr className="mt-4 mb-2" />
      <div className="d-flex align-items-center">
        <span className="mr-2">
          <Cake className="pt-1" />
        </span>
        <h4 className="d-inline text-lighter fs-14 font-weight-lighter mt-1 mb-2 pb-1 pt-1">
          Created {subredditContent.createdAt.slice(0, 15)}
        </h4>
      </div>
    </div>
  );
};
