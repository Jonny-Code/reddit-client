import React from "react";
import { ReactComponent as RedditLogo } from "./reddit.svg";
import { ReactComponent as Account } from "./account.svg";
import { ReactComponent as DownArrow } from "./down-arrow.svg";
import { ReactComponent as Search } from "./search.svg";
import "./Header.css";

export const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="row">
          <div className="col-7">
            <RedditLogo />
            <p className="brand-text">reddit</p>
            <div className="search-container">
              <form action="search">
                <Search className="search-svg" />
                <input
                  type="text"
                  name=""
                  id="search-bar"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div className="col-3">
            <button className="btn-dark">LOG IN</button>
            <button className="btn-light">SIGN UP</button>
            <div className="dropdown">
              <Account />
              <DownArrow />
              <div className="dropdown-menu">
                <h3>View Options</h3>
                <button type="submit">Night Mode</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
