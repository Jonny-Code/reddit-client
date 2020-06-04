import React, { useState } from "react";
import { ReactComponent as DownArrowSvg } from "./svg/down-arrow-1.svg";
import { ReactComponent as OnlineAccountSvg } from "./svg/online-account.svg";
import { ReactComponent as MoonSvg } from "./svg/moon.svg";
import { ReactComponent as CoinSvg } from "./svg/coin.svg";
import { ReactComponent as KarmaSvg } from "./svg/karma.svg";
import { useHistory } from "react-router-dom";
import "./DropdownUser.css";

export const DropdownUser: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.go(0);
  };

  return (
    <>
      <div className="dropdown-user-container">
        <div
          onClick={() => setIsShowing(!isShowing)}
          className="dropdown-user pointer"
        >
          <OnlineAccountSvg />
          <div className="dropdown-user-flex-col">
            <h4 className="dropdown-user-name">{localStorage.userName}</h4>
            <div className="dropdown-user-karma-container">
              <KarmaSvg />
              <h4 className="dropdown-user-karma">1 karma</h4>
            </div>
          </div>
          <DownArrowSvg className="mr-auto" />
        </div>
      </div>

      {isShowing ? (
        <div className="dropdown-menu">
          <h3>VIEW OPTIONS</h3>
          <button type="submit">
            <MoonSvg /> <span>Night Mode</span>
          </button>
          <h3>MORE STUFF</h3>
          <button type="submit">
            <CoinSvg />
            <span className="coin-span">
              <div>
                <span>Reddit Coins</span>
                <div className="coin-amount">0 Coins</div>
              </div>
            </span>
          </button>
          <h3>LOGOUT</h3>
          <button onClick={logout} type="submit">
            <OnlineAccountSvg /> <span>Logout</span>
          </button>
        </div>
      ) : null}
    </>
  );
};
