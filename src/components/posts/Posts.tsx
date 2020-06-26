import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { ReactComponent as Comment } from "./svg/comment.svg";
import { Post } from "../../contexts/Post";
import {
  FetchPostUpvote,
  FetchPostDownvote,
  FetchDeleteUpvote,
  FetchDeleteDownvote,
} from "../../util/Fetch";
import "./Posts.css";
import { LogInModal } from "../modals/LogInModal";

export const Posts: React.FC = () => {
  const { posts, postsDispatch } = useContext(PostsContext);
  const [localPosts, setLocalPosts] = useState<Post[]>([]);
  const [loadVotes, setLoadVotes] = useState<boolean>(false);
  const [openLogInModal, setOpenLogInModal] = useState("");
  let { subName } = useParams();

  useEffect(() => {
    setLocalPosts([...posts]);
  }, [posts]);

  useEffect(() => {
    if (!loadVotes) {
      if (localStorage.upvoted) {
        if (posts.length) {
          let temp = [...posts];
          let x = localStorage.upvoted.split(",");
          for (let i = 0; i < posts.length; i++) {
            for (let j = 0; j < x.length; j++) {
              if (posts[i]._id === x[j]) {
                temp[i] = posts[i];
                temp[i].upvoted = true;
              }
            }
          }
          postsDispatch({ type: "spread", posts: temp });
          setLoadVotes((v: any) => (v = !v));
        }
      }
    }
  }, [posts]);

  const handleOpenLoginModal = () => {
    setOpenLogInModal("login-modal-fadein login-modal-show");
  };

  const handleUpvotedClick = (post: any) => {
    if (!localStorage.userToken) {
      handleOpenLoginModal();
      return;
    }
    if (post.upvoted) FetchDeleteUpvote(postsDispatch, post);
    else FetchPostUpvote(postsDispatch, post);
  };

  const handleDownvotedClick = (post: any) => {
    if (!localStorage.userToken) {
      handleOpenLoginModal();
      return;
    }
    if (post.downvoted) FetchDeleteDownvote(postsDispatch, post);
    else FetchPostDownvote(postsDispatch, post);
  };

  return (
    <>
      <LogInModal
        openLogInModal={openLogInModal}
        setOpenLogInModal={setOpenLogInModal}
      />
      {localPosts.map((p: Post) => (
        <Link
          key={p._id}
          style={{ textDecoration: "none" }}
          to={`/r/${subName}/comments/${p._id}`}
        >
          <div className="posts-container">
            <div className="col-1-posts">
              <span
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleUpvotedClick(p);
                }}
                className="hover-nav-btn br-2 pointer"
                style={{
                  height: "20px",
                  width: "70%",
                  padding: "3px 0",
                  margin: "5px auto 4px auto",
                  textAlign: "center",
                }}
              >
                <svg
                  width="12pt"
                  height="18pt"
                  viewBox="0 0 13 16"
                  version="1.1"
                >
                  <g id="surface1">
                    <path
                      className={p.upvoted ? "upvoted" : ""}
                      id="hover-nav-svg-red"
                      fill="#818384"
                      d="M 11.320312 6.0625 L 6.714844 0.105469 C 6.664062 0.0390625 6.582031 0 6.5 0 C 6.417969 0 6.335938 0.0390625 6.285156 0.105469 L 1.679688 6.0625 C 1.617188 6.144531 1.605469 6.257812 1.652344 6.347656 C 1.699219 6.441406 1.792969 6.5 1.894531 6.5 L 4.332031 6.5 L 4.332031 12.730469 C 4.332031 12.878906 4.453125 13 4.605469 13 L 8.394531 13 C 8.546875 13 8.667969 12.878906 8.667969 12.730469 L 8.667969 6.5 L 11.105469 6.5 C 11.207031 6.5 11.300781 6.441406 11.347656 6.347656 C 11.394531 6.257812 11.382812 6.144531 11.320312 6.0625 Z M 11.320312 6.0625 "
                    />
                  </g>
                </svg>
              </span>
              <span
                className={
                  p.upvoted
                    ? "upvoted-votes"
                    : p.downvoted
                    ? "downvoted-votes"
                    : "votes"
                }
              >
                {p.votes}
              </span>
              <span
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  handleDownvotedClick(p);
                }}
                className="hover-nav-btn br-2 pointer"
                style={{
                  height: "20px",
                  width: "70%",
                  padding: "0 0 7px 0",
                  margin: "4px auto 5px auto",
                  textAlign: "center",
                }}
              >
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  width="12pt"
                  height="18pt"
                  viewBox="0 0 13 16"
                  version="1.1"
                >
                  <g id="surface1">
                    <path
                      className={p.downvoted ? "downvoted" : ""}
                      id="hover-nav-svg-blue"
                      fill="#818384"
                      d="M 11.320312 6.0625 L 6.714844 0.105469 C 6.664062 0.0390625 6.582031 0 6.5 0 C 6.417969 0 6.335938 0.0390625 6.285156 0.105469 L 1.679688 6.0625 C 1.617188 6.144531 1.605469 6.257812 1.652344 6.347656 C 1.699219 6.441406 1.792969 6.5 1.894531 6.5 L 4.332031 6.5 L 4.332031 12.730469 C 4.332031 12.878906 4.453125 13 4.605469 13 L 8.394531 13 C 8.546875 13 8.667969 12.878906 8.667969 12.730469 L 8.667969 6.5 L 11.105469 6.5 C 11.207031 6.5 11.300781 6.441406 11.347656 6.347656 C 11.394531 6.257812 11.382812 6.144531 11.320312 6.0625 Z M 11.320312 6.0625 "
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div className="col-4-posts">
              <small className="posted-by">
                Posted by u/
                <span className="pointer hover-underline">
                  {p.postedBy}
                </span>{" "}
                {moment(p.postedAt).fromNow()}
              </small>
              <h3 className="post-title">{p.title}</h3>
              {p.imgSrc.length ? (
                <div className="d-flex justify-content-center">
                  <img className="post-img" src={p.imgSrc} alt="post" />
                </div>
              ) : null}
              <div className="d-flex">
                <button className="btn-comments d-flex align-items-center">
                  <Comment className="mr-1" /> {p.comments} Comments
                </button>
                <button className="btn-share">Share</button>
                <button className="btn-save">Save</button>
                <button className="btn-options">...</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
