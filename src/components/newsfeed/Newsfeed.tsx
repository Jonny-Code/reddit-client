import React from "react";
import { Route } from "react-router-dom";
import { Posts } from "../posts/Posts";
import { Navbar } from "../navbar/Navbar";
import { About } from "../about/About";
import { PostComments } from "../post-comments/PostComments";
import { CreatePost } from "./CreatePost";
import "./Newsfeed.css";

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
        </div>
      </div>
    </>
  );
};
