import React from "react";
import "./Newsfeed.css";
import { Posts } from "./Posts";

export const Newsfeed: React.FC = () => {
  return (
    <>
      <div className="container-news">
        <div className="col-3-news">
          <div className="nav-container-news"></div>
          <Posts />
        </div>
        <div className="col-2-news">
          <div className="about-container-news"></div>
        </div>
      </div>
    </>
  );
};
