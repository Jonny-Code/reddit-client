import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { SubredditsContext } from "../../contexts/SubredditsContext";
import { FetchGetSubreddits } from "../../util/Fetch";
import { PostsContext } from "../../contexts/PostsContext";
import "./Banner.css";




export const Banner: React.FC = () => {
  const { subreddits, subredditsDispatch } = useContext(SubredditsContext);
  const { postsDispatch } = useContext(PostsContext);
  const [sub, setSub] = useState({
    _id: "",
    name: "",
    heading: "",
    joined: false
  });
  let { subName } = useParams();

  

  useEffect(() => {
    console.log(subName)
    if (!subreddits.length) {
      console.log("run fetch")
      FetchGetSubreddits(subredditsDispatch, postsDispatch, subName);
    }

    if (subreddits.length) {
      setSub(subreddits[0]);
    }
  }, [subName, subreddits, subredditsDispatch, postsDispatch]);

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
