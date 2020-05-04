import React from "react";
import { Posts } from "../posts/Posts";
import { Navbar } from "../navbar/Navbar";
import { About } from "../about/About";
import { CreatePost } from "./CreatePost";
import { Rules } from "../rules/Rules";
import "./Newsfeed.css";
import { Moderators } from "../moderators/Moderators";

export const Newsfeed: React.FC = () => {
  return (
    <>
      <div className="container-news">
        <div className="col-3-news">
          {localStorage.userToken ? <CreatePost /> : null}
          <Navbar />
          <Posts />
        </div>
        <div className="col-2-news">
          <About />
          <Rules />
          <Moderators />
        </div>
      </div>
    </>
  );
};
