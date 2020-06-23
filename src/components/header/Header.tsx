import React, { useState, useRef, useContext, useEffect } from "react";
import { ReactComponent as RedditLogoSvg } from "./svg/reddit.svg";
import { ReactComponent as OfflineAccountSvg } from "./svg/offline-account.svg";
import { ReactComponent as DownArrowSvg } from "./svg/down-arrow-1.svg";
import { ReactComponent as SearchSvg } from "./svg/search.svg";
import { ReactComponent as MoonSvg } from "./svg/moon.svg";
import { ReactComponent as CoinSvg } from "./svg/coin.svg";
import { ReactComponent as CloseSvg } from "./svg/x.svg";
import { FetchAuth, FetchRegister, FetchGetSubreddit } from "../../util/Fetch";
import { useHistory, useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { DropdownUser } from "../dropdowns/DropdownUser";
import { DropdownSubreddit } from "../dropdowns/DropdownSubreddit";
import { UserContext } from "../../contexts/UserContext";
import "./Header.css";
import { SubredditContext } from "../../contexts/SubredditContext";

export const Header: React.FC = () => {
  const { posts, postsDispatch } = useContext(PostsContext);
  const { userDispatch } = useContext(UserContext);
  const { subredditDispatch } = useContext(SubredditContext);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [loadVotes, setLoadVotes] = useState<boolean>(false);
  const [user, setUser] = useState<object>({
    email: "",
    password: "",
    name: "",
  });
  const signModalRef = useRef<HTMLDivElement>(null);
  const logModalRef = useRef<HTMLDivElement>(null);
  let { subName } = useParams();
  const history = useHistory();

  useEffect(() => {
    FetchGetSubreddit(subredditDispatch, postsDispatch, subName);
  }, []);

  useEffect(() => {
    return () => {
      if (!loadVotes) {
        if (localStorage.upvoted) {
          if (posts.length) {
            let temp = [...posts];
            let x = localStorage.upvoted.split(",");
            for (let i = 0; i < posts.length; i++) {
              if (posts[i]._id === x[i]) {
                temp[i] = posts[i];
                temp[i].upvoted = true;
                postsDispatch({ type: "spread", posts: temp });
              }
            }
            setLoadVotes((v: any) => !v);
          }
        }
      }
    };
  });

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
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    FetchAuth(user, history, userDispatch);
  };
  const signUp = () => {
    FetchRegister(user);
  };

  return (
    <header className="header">
      <div className="row-header">
        <div className="col-7-header">
          <RedditLogoSvg />
          <p className="brand-text">reddit</p>
          {localStorage.userToken ? (
            <DropdownSubreddit color="#1a1a1b" size={{ x: 270, y: 36 }} />
          ) : null}
          <div className="search-container">
            <form action="search">
              <SearchSvg className="search-svg" />
              <input type="text" name="" placeholder="Search" />
            </form>
          </div>
        </div>
        {localStorage.userToken ? (
          <DropdownUser />
        ) : (
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
                  <span
                    onClick={closeSignupModal}
                    className="signup-modal-close"
                  >
                    <CloseSvg />
                  </span>
                  <div className="signup-modal-container">
                    <h4>
                      By having a Reddit account, you can join, vote, and
                      comment on all your favorite Reddit content.
                    </h4>
                    <input
                      onChange={updateField}
                      name="name"
                      type="text"
                      placeholder="Username"
                    />
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
                    <button onClick={signUp} className="pointer">
                      SIGN UP
                    </button>
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
              <OfflineAccountSvg />
              <DownArrowSvg />
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
              </div>
            ) : null}
          </div>
        )}
      </div>
    </header>
  );
};
