import React from "react";
import { Posts } from "../posts/Posts";
import { Navbar } from "../navbar/Navbar";
import { About } from "../about/About";
import { CreatePost } from "./CreatePost";
import { Rules } from "../rules/Rules";
import { Moderators } from "../moderators/Moderators";
import { Banner } from "../banner/Banner";
import { Header } from "../header/Header";
import "./Newsfeed.css";

export const Newsfeed: React.FC<{ order: string | null }> = (props) => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container-news">
        <div className="col-3-news">
          {localStorage.userToken ? <CreatePost /> : null}
          <Navbar />
          <Posts order={props.order} />
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
