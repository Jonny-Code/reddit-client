import React, { useEffect, useContext, useState } from "react";
import { SubredditsContext } from "../../contexts/SubredditsContext";
import "./Banner.css";

export const Banner: React.FC = () => {
  const { subreddits } = useContext(SubredditsContext);
  const [sub, setSub] = useState({
    _id: "",
    name: "",
    heading: "",
    joined: false
  });

  useEffect(() => {
    if (subreddits.length) {
      setSub(subreddits[0]);
    }
  }, [subreddits]);

  return (
    <div className="main-background-banner">
      <div className="banner-banner"></div>
      <div className="row-banner">
        <div className="col-banner">
          <div className="logo-placeholder-banner"></div>
          <div className="mt-x-banner">
            <div className="text-container-banner">
              <h1 className="title-banner">{sub.heading}</h1>
              <h2 className="subreddit-banner">r/{sub.name}</h2>
            </div>
            <div className="btn-container-banner">
              {sub.joined ? (
                <button className="btn-light-banner pointer">JOINED</button>
              ) : (
                <button className="btn-light-banner pointer">JOIN</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
