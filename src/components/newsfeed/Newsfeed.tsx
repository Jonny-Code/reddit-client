import React from "react";
import { Route } from "react-router-dom";
import { Posts } from "../posts/Posts";
import { Navbar } from "../navbar/Navbar";
import { About } from "../about/About";
import { PostComments } from "../post-comments/PostComments";
import "./Newsfeed.css";

export const Newsfeed: React.FC = () => {
  return (
    <>
      <div className="container-news">
        <Route path="/r/:subName/comments/:postId" component={PostComments} />
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
