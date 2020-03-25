import React from "react";
import "./Newsfeed.css";
import { Posts } from "./Posts";
import { ReactComponent as Hot } from "./svg/hot.svg";
import { ReactComponent as New } from "./svg/new.svg";
import { ReactComponent as Top } from "./svg/top.svg";
import { ReactComponent as Card } from "./svg/card.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";

export const Newsfeed: React.FC = () => {
  return (
    <>
      <div className="container-news">
        <div className="col-3-news">
          <div className="d-flex nav-container-news">
            <div
              style={{ width: "100%" }}
              className="d-flex align-items-center"
            >
              <button className="d-flex align-items-center pointer pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
                <Hot />
                <span className="text-light pl-1 fs-14 font-weight-bold">
                  Hot
                </span>
              </button>
              <button className="d-flex align-items-center pointer ml-1 pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
                <New />
                <span className="text-light pl-1 fs-14 font-weight-bold">
                  New
                </span>
              </button>
              <button className="d-flex align-items-center pointer mr-1 ml-1 pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
                <Top />
                <span className="text-light pl-1 fs-14 font-weight-bold">
                  Top
                </span>
              </button>
              <button className="d-flex align-items-center pointer pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
                <span
                  style={{ height: "21px" }}
                  className="text-light fs-12 font-weight-bolder letter-spacing-3"
                >
                  ...
                </span>
              </button>
              <div
                style={{
                  marginLeft: "auto",
                  flexFlow: "row nowrap"
                }}
                className="d-flex align-items-center"
              >
                <button className="d-flex align-items-center pointer pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
                  <Card />
                  <DownArrow />
                </button>
              </div>
            </div>
          </div>
          <Posts />
        </div>
        <div className="col-2-news">
          <div className="about-container-news"></div>
        </div>
      </div>
    </>
  );
};
