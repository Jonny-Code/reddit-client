import React from "react";
import { ReactComponent as Hot } from "./svg/hot.svg";
import { ReactComponent as New } from "./svg/new.svg";
import { ReactComponent as Top } from "./svg/top.svg";
import { ReactComponent as Card } from "./svg/card.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";

export const Navbar: React.FC = () => {
  return (
    <div className="d-flex nav-container-news">
      <div className="d-flex align-items-center w-100">
        <button className="d-flex align-items-center pointer focus-outline-none pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
          <Hot />
          <span className="text-light pl-1 fs-14 font-weight-bold">Hot</span>
        </button>
        <button className="d-flex align-items-center pointer focus-outline-none ml-1 pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
          <New />
          <span className="text-light pl-1 fs-14 font-weight-bold">New</span>
        </button>
        <button className="d-flex align-items-center pointer focus-outline-none mr-1 ml-1 pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
          <Top />
          <span className="text-light pl-1 fs-14 font-weight-bold">Top</span>
        </button>
        <button className="d-flex align-items-center pointer focus-outline-none pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
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
          <button className="d-flex align-items-center pointer focus-outline-none pt-1 pb-1 pl-3 pr-3 br-6 bg-dark hover-nav-btn">
            <Card />
            <DownArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
