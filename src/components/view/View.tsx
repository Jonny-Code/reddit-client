import React from "react";
import "./View.css";

export const View: React.FC = () => {
  return (
    <div className="row-view">
      <div className="col-view">
        <div className="banner-background">
          <div className="banner-placeholder">
            <div className="banner-container">
              <div className="title-view">
                <div className="banner-logo">
                  <div className="logo-placeholder"></div>
                </div>
                <div className="title-container">
                  <h1 className="title">Amet aute ullamco quis tempor.</h1>
                  <h2 className="subreddit">r/Amet</h2>
                </div>
                <div className="btn-view">
                  <button className="btn-light">JOIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
