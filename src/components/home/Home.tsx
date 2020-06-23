import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { CreateSubreddit } from "../create-subreddit/CreateSubreddit";

export const Home: React.FC = () => {
  return (
    <>
      {/* <CreateSubreddit /> */}
      <div className="home-container">
        <div className="home-banner-1">
          <div className="home-heading-2">Shmreddit</div>
          <div className="home-heading-1">
            This is a reddit clone. Not all features of reddit are working on
            here. Check it out!
          </div>
          <div className="link-container">
            <Link to="/r/Ubuntu" className="text-decoration-none">
              <div className="reddit-clone-link-container">
                <div className="reddit-clone-link">Reddit Clone</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
