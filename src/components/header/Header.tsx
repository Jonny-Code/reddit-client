import React, { useState, useContext, useEffect } from "react";
import { ReactComponent as RedditLogoSvg } from "./svg/reddit.svg";
import { ReactComponent as OfflineAccountSvg } from "./svg/offline-account.svg";
import { ReactComponent as DownArrowSvg } from "./svg/down-arrow-1.svg";
import { ReactComponent as SearchSvg } from "./svg/search.svg";
import { ReactComponent as MoonSvg } from "./svg/moon.svg";
import { ReactComponent as CoinSvg } from "./svg/coin.svg";
import { FetchGetSubreddit } from "../../util/Fetch";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { DropdownUser } from "../dropdowns/DropdownUser";
import { DropdownSubreddit } from "../dropdowns/DropdownSubreddit";
import { LogInModal } from "../modals/LogInModal";
import { SubredditContext } from "../../contexts/SubredditContext";
import { SignUpModal } from "../modals/SignUpModal";
import "./Header.css";

export const Header: React.FC = () => {
  const { posts, postsDispatch } = useContext(PostsContext);
  const { subredditDispatch } = useContext(SubredditContext);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [loadVotes, setLoadVotes] = useState<boolean>(false);
  const [openLogInModal, setOpenLogInModal] = useState("");
  const [openSignUpModal, setOpenSignUpModal] = useState("");
  let { subName } = useParams();

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
            setLoadVotes((v: any) => (v = !v));
          }
        }
      }
    };
  });

  const handleOpenSignupModal = () => {
    setOpenSignUpModal("signup-modal-fadein signup-modal-show");
  };

  const handleOpenLoginModal = () => {
    setOpenLogInModal("login-modal-fadein login-modal-show");
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
              onClick={handleOpenLoginModal}
              className="btn-dark pointer focus-outline-none"
            >
              LOG IN
            </button>
            <LogInModal
              openLogInModal={openLogInModal}
              setOpenLogInModal={setOpenLogInModal}
            />

            <button
              onClick={handleOpenSignupModal}
              className="btn-light pointer focus-outline-none"
            >
              SIGN UP
            </button>
            <SignUpModal
              openSignUpModal={openSignUpModal}
              setOpenSignUpModal={setOpenSignUpModal}
            />

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
