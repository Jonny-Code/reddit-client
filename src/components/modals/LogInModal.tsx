import React, { useState } from "react";
import { ReactComponent as RedditLogoSvg } from "./svg/reddit.svg";
import { ReactComponent as CloseSvg } from "./svg/x.svg";
import { FetchAuth } from "../../util/Fetch";
import { useHistory } from "react-router-dom";
import "./LogInModal.css";

export const LogInModal: React.FC<{
  openLogInModal: string;
  setOpenLogInModal: (e: any) => void;
}> = (props) => {
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
    name: "",
  });
  const history = useHistory();

  const closeLoginModal = () => {
    props.setOpenLogInModal("");
  };
  const updateField = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    FetchAuth(user, history);
  };

  return (
    <div className={`login-modal ${props.openLogInModal}`}>
      <div className="login-modal-content">
        <div className="login-modal-col-1"></div>
        <div className="login-modal-col-2">
          <span onClick={closeLoginModal} className="login-modal-close">
            <CloseSvg />
          </span>
          <div className="login-modal-container">
            <RedditLogoSvg />
            <h4>Sign in</h4>
            <input
              onChange={updateField}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={updateField}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button onClick={login} className="pointer">
              SIGN IN
            </button>
            <small>
              <span className="d-inline text-blue pointer">
                Forgot username
              </span>{" "}
              <div className="d-inline text-dark">·</div>{" "}
              <span className="d-inline text-blue pointer">
                Forgot password
              </span>
            </small>
            <small>
              New to Reddit? <span className="text-blue pointer">SIGN UP</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
