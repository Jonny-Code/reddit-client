import React from "react";
import { ReactComponent as DownArrowSvg } from "./svg/down-arrow-1.svg";
import { ReactComponent as OnlineAccountSvg } from "./svg/online-account.svg";
import { ReactComponent as KarmaSvg } from "./svg/karma.svg";
import "./DropdownUser.css";

export const DropdownUser: React.FC = () => {
  return (
    <div className="dropdown-user-container">
      <div className="dropdown-user pointer">
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
  );
};
