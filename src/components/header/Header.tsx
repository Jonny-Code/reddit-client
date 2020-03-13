import React, { useState } from "react";
import { ReactComponent as RedditLogo } from "./svgs/reddit.svg";
import { ReactComponent as Account } from "./svgs/account.svg";
import { ReactComponent as DownArrow } from "./svgs/down-arrow.svg";
import { ReactComponent as Search } from "./svgs/search.svg";
import { ReactComponent as Moon } from "./svgs/moon.svg";
import { ReactComponent as Coin } from "./svgs/coin.svg";
import "./Header.css";

export const Header: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="row-header">
        <div className="col-7-header">
          <RedditLogo />
          <p className="brand-text">reddit</p>
          <div className="search-container">
            <form action="search">
              <Search className="search-svg" />
              <input type="text" name="" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="col-3-header">
          <button className="btn-dark">LOG IN</button>
          <button className="btn-light">SIGN UP</button>
          <div onClick={() => setIsShowing(!isShowing)} className="dropdown">
            <Account />
            <DownArrow />
          </div>
          {isShowing ? (
            <div className="dropdown-menu">
              <h3>VIEW OPTIONS</h3>
              <button type="submit">
                <Moon /> <span>Night Mode</span>
              </button>
              <h3>MORE STUFF</h3>
              <button type="submit">
                <Coin />
                <span className="coin-span">
                  <div>
                    <span>Reddit Coins</span>
                    <div className="coin-amount">0 Coins</div>
                  </div>
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};
