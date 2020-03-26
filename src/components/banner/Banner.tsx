import React from "react";
import "./Banner.css";

export const Banner: React.FC = () => {
  return (
    <div className="main-background-banner">
      <div className="banner-banner"></div>
      <div className="row-banner">
        <div className="col-banner">
          <div className="logo-placeholder-banner"></div>
          <div className="mt-x-banner">
            <div className="text-container-banner">
              <h1 className="title-banner">Ubuntu: Linux for Human Beings</h1>
              <h2 className="subreddit-banner">r/Ubuntu</h2>
            </div>
            <div className="btn-container-banner">
              <button className="btn-light-banner pointer">JOIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
