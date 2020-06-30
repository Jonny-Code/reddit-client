import React from "react";
import { ReactComponent as Hot } from "./svg/hot.svg";
import { ReactComponent as New } from "./svg/new.svg";
import { ReactComponent as Top } from "./svg/top.svg";
import { ReactComponent as Card } from "./svg/card.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";
import "./Navbar.css";
import { Link, useParams } from "react-router-dom";

export const Navbar: React.FC = () => {
  let { subName } = useParams();

  return (
    <div className="d-flex nav-container-news">
      <div className="d-flex align-items-center w-100">
        <button className="navbar-hot focus-outline-none hover-nav-btn">
          <Hot />
          <span className="text-light pl-1 font-weight-bold">Hot</span>
        </button>
        <button className="navbar-new focus-outline-none hover-nav-btn">
          <New />
          <span className="text-light pl-1 font-weight-bold">New</span>
        </button>
        <Link
          className="highlight-none text-decoration-none"
          to={`/r/${subName}/top`}
        >
          <button className="navbar-top focus-outline-none hover-nav-btn">
            <Top />
            <span className="text-light pl-1 font-weight-bold">Top</span>
          </button>
        </Link>
        <button className="navbar-more focus-outline-none hover-nav-btn">
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
            flexFlow: "row nowrap",
          }}
          className="d-flex align-items-center"
        >
          <button className="navbar-card focus-outline-none hover-nav-btn">
            <Card />
            <DownArrow />
          </button>
        </div>
      </div>
    </div>
  );
};
