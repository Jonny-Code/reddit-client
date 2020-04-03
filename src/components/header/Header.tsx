import React, { useState, useRef } from "react";
import { ReactComponent as RedditLogo } from "./svg/reddit.svg";
import { ReactComponent as Account } from "./svg/account.svg";
import { ReactComponent as DownArrow } from "./svg/down-arrow-1.svg";
import { ReactComponent as Search } from "./svg/search.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";
import { ReactComponent as Coin } from "./svg/coin.svg";
import { ReactComponent as Close } from "./svg/x.svg";
import { FetchAuth } from "../../util/Fetch";
import "./Header.css";

export const Header: React.FC = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [user, setUser] = useState<object>({ email: "", password: "" });
  const signModalRef = useRef<HTMLDivElement>(null);
  const logModalRef = useRef<HTMLDivElement>(null);

  const openSignupModal = () => {
    signModalRef.current?.classList.add("signup-modal-fadein");
    signModalRef.current?.classList.add("signup-modal-show");
  };
  const closeSignupModal = () => {
    signModalRef.current?.classList.remove("signup-modal-fadein");
    signModalRef.current?.classList.add("signup-modal-fadeout");
    setTimeout(() => {
      signModalRef.current?.classList.remove("signup-modal-show");
      signModalRef.current?.classList.remove("signup-modal-fadeout");
    }, 400);
  };

  const openLoginModal = () => {
    logModalRef.current?.classList.add("login-modal-fadein");
    logModalRef.current?.classList.add("login-modal-show");
  };
  const closeLoginModal = () => {
    logModalRef.current?.classList.remove("login-modal-fadein");
    logModalRef.current?.classList.add("login-modal-fadeout");
    setTimeout(() => {
      logModalRef.current?.classList.remove("login-modal-show");
      logModalRef.current?.classList.remove("login-modal-fadeout");
    }, 400);
  };

  const updateField = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(user);
  };

  const login = () => {
    FetchAuth(user);
  };

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
        <div className="col-3-header ml-5">
          <button
            onClick={openLoginModal}
            className="btn-dark pointer focus-outline-none"
          >
            LOG IN
          </button>
          <div ref={logModalRef} className="login-modal">
            <div className="login-modal-content">
              <div className="login-modal-col-1"></div>
              <div className="login-modal-col-2">
                <span onClick={closeLoginModal} className="login-modal-close">
                  <Close />
                </span>
                <div className="login-modal-container">
                  <RedditLogo />
                  <h4>Sign in</h4>
                  <input
                    onChange={updateField}
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    onChange={updateField}
                    name="password"
                    type="text"
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
                    New to Reddit?{" "}
                    <span className="text-blue pointer">SIGN UP</span>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={openSignupModal}
            className="btn-light pointer focus-outline-none"
          >
            SIGN UP
          </button>
          <div ref={signModalRef} className="signup-modal">
            <div className="signup-modal-content">
              <div className="signup-modal-col-1"></div>
              <div className="signup-modal-col-2">
                <span onClick={closeSignupModal} className="signup-modal-close">
                  <Close />
                </span>
                <div className="signup-modal-container">
                  <h4>
                    By having a Reddit account, you can join, vote, and comment
                    on all your favorite Reddit content.
                  </h4>
                  <input type="text" placeholder="Email" />
                  <button className="pointer">NEXT</button>
                  <small>
                    Already a Redditor?{" "}
                    <span className="text-blue pointer">LOG IN</span>
                  </small>
                  <small>
                    By clicking next, you agree to our{" "}
                    <span className="text-blue pointer">Terms</span> and that
                    you have read our{" "}
                    <span className="text-blue pointer">Privacy Policy</span>{" "}
                    and{" "}
                    <span className="text-blue pointer">Content Policy</span>.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsShowing(!isShowing)}
            className="dropdown pointer"
          >
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
