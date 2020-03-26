import React from "react";
import "./Newsfeed.css";
import { Posts } from "../posts/Posts";
import { Navbar } from "../navbar/Navbar";
import { About } from "../about/About";

export const Newsfeed: React.FC = () => {
  return (
    <>
      <div className="container-news">
        <div className="col-3-news">
          <Navbar />
          <Posts />
        </div>
        <div className="col-2-news">
          <About />
        </div>
      </div>
    </>
  );
};
