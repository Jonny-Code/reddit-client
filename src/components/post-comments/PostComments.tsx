import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as CommentSvg } from "./svg/comment.svg";
import { Comments } from "./Comments";
import { PostsContext } from "../../contexts/PostsContext";
import { Post, PostModel } from "../../contexts/Post";
import { SubredditContext } from "../../contexts/SubredditContext";
import { Subreddit, SubredditModel } from "../../contexts/Subreddit";
import "./PostComments.css";

export const PostComments: React.FC = () => {
  const { posts } = useContext(PostsContext);
  const { subreddit } = useContext(SubredditContext);
  const [postContent, setPostContent] = useState<Post>(PostModel);
  const [subredditContent, setSubredditContent] = useState<Subreddit>(
    SubredditModel
  );
  const [isShowing, setIsShowing] = useState(false);
  let { subName, postId } = useParams();

  useEffect(() => {
    if (!Array.isArray(subreddit)) {
      setSubredditContent(subreddit);
    }

    document.body.style.overflow = "hidden";
    if (!postContent.title.length) {
      for (let i = 0; i < posts.length; i++) {
        if (postId === posts[i]._id) {
          setPostContent(posts[i]);
        }
      }
      setIsShowing(true);
    }
  });

  useEffect(() => {
    return () => {
      if (!isShowing) {
        document.body.style.overflow = "visible";
      }
    };
  }, [postId]);

  return (
    <>
      <div className={`post-comments`}>
        <Link style={{ textDecoration: "none" }} to={`/r/${subName}`}>
          <div className="post-comments-content">
            <div className="post-comments-container">
              <div
                onClick={(e: any) => {
                  e.preventDefault();
                }}
                className="post-comments-header"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      borderLeft: "1px solid rgb(60, 60, 63)",
                      borderRight: "1px solid rgb(60, 60, 63)",
                      padding: "0 4px",
                      margin: "0 12px 0 32px",
                      height: "26px",
                      maxWidth: "100px",
                      display: "flex",
                      flex: 1,
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="hover-nav-btn pointer d-flex align-items-center justify-content-center"
                      style={{
                        height: "26px",
                        width: "28px",
                        paddingTop: "2px",
                      }}
                    >
                      <Arrow />
                    </span>
                    <span
                      style={{ width: "20px" }}
                      className="votes fs-14 font-weight-bold"
                    >
                      {postContent.votes}
                    </span>
                    <span
                      className="hover-nav-btn pointer d-flex align-items-center justify-content-center"
                      style={{
                        height: "26px",
                        width: "28px",
                        paddingBottom: "3px",
                      }}
                    >
                      <Arrow style={{ transform: "rotate(180deg)" }} />
                    </span>
                  </div>

                  <div
                    style={{ height: "26px" }}
                    className="flex-4 d-flex align-items-center"
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        background: "rgb(60, 60, 63)",
                        borderRadius: "4px",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <CommentSvg />
                    </span>
                    <h4
                      style={{ margin: "0", padding: "0 0 2px 10px" }}
                      className="text-white font-weight-lighter"
                    >
                      {postContent.title}
                    </h4>
                    <h4
                      style={{
                        margin: "0 30px 0 auto",
                        fontFamily: "monospace",
                      }}
                      className="text-light fs-15 font-weight-light"
                    >
                      X CLOSE
                    </h4>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%", height: "48px" }}></div>
              <div
                onClick={(e: any) => {
                  e.preventDefault();
                }}
                style={{
                  cursor: "auto",
                  margin: "32px 0 0 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    maxWidth: "740px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "740px",
                      width: "100%",
                      height: "100%",
                      background: "#1a1a1b",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="hover-nav-btn br-2 pointer"
                        style={{
                          height: "20px",
                          width: "70%",
                          padding: "3px 0",
                          margin: "5px 0 4px 0",
                          textAlign: "center",
                        }}
                      >
                        <Arrow />
                      </span>
                      <span className="votes fs-14 font-weight-bold mr-1 ml-1">
                        {postContent.votes}
                      </span>
                      <span
                        className="hover-nav-btn br-2 pointer"
                        style={{
                          height: "20px",
                          width: "70%",
                          padding: "0 0 7px 0",
                          margin: "4px 0 5px 0",
                          textAlign: "center",
                        }}
                      >
                        <Arrow style={{ transform: "rotate(180deg)" }} />
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 16,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "20px",
                          margin: "10px 0 0 4px",
                          display: "flex",
                        }}
                      >
                        <img
                          style={{
                            maxHeight: "22px",
                            maxWidth: "22px",
                          }}
                          src={subredditContent.logoImgSrc}
                          alt="asd"
                        />
                        <h4
                          style={{
                            display: "inline",
                            margin: "auto 0 0 4px",
                            height: "18px",
                            fontFamily: "monospace",
                          }}
                          className="text-white fs-13 font-weight-bold"
                        >
                          r/{subredditContent.name}
                        </h4>
                        <h4
                          style={{
                            display: "inline",
                            margin: "auto 0 0 8px",
                            height: "18px",
                          }}
                          className="text-light fs-12 font-weight-lighter"
                        >
                          Posted by u/{" "}
                          <span className="hover-underline pointer">
                            {postContent.postedBy}
                          </span>{" "}
                          {postContent.postedAt}
                        </h4>
                      </div>
                      <h3
                        style={{
                          margin: "6px 0",
                        }}
                        className="post-title"
                      >
                        {postContent.title}
                      </h3>
                      <h5
                        style={{
                          color: "rgb(215, 218, 220)",
                          margin: "16px 18px 16px 8px",
                          lineHeight: "1.4",
                        }}
                        className="fs-15 font-weight-lighter"
                      >
                        {postContent.body}
                      </h5>
                      <div className="d-flex">
                        <button className="btn-comments d-flex align-items-center">
                          <CommentSvg className="mr-1" /> {postContent.comments}{" "}
                          Comments
                        </button>
                        <button className="btn-share">Share</button>
                        <button className="btn-save">Save</button>
                        <button className="btn-hide">Hide</button>
                        <button className="btn-report">Report</button>
                        <span
                          style={{
                            margin: "auto 14px auto auto",
                          }}
                          className="text-light fs-11 font-weight-lighter"
                        >
                          90% Upvoted
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid rgb(60, 60, 63)",
                          borderRadius: "4px",
                          margin: "18px 22px 18px 10px",
                          padding: "5px 0",
                        }}
                      >
                        <h4
                          style={{
                            margin: "6px",
                            padding: "5px 0",
                          }}
                          className="text-light font-weight-light"
                        >
                          Log in or sign up to leave a comment
                        </h4>
                        <span
                          style={{ display: "flex", margin: "0 6px 0 auto" }}
                        >
                          <button
                            style={{
                              marginRight: "2px",
                              width: "80px",
                              height: "31px",
                            }}
                            className="btn-dark pointer focus-outline-none"
                          >
                            LOG IN
                          </button>
                          <button
                            style={{
                              marginLeft: "2px",
                              width: "80px",
                              height: "31px",
                            }}
                            className="btn-light pointer focus-outline-none"
                          >
                            SIGN UP
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Comments />
                </div>

                <div
                  style={{
                    maxWidth: "312px",
                    width: "100%",
                    height: "300px",
                    background: "#1a1a1b",
                    borderRadius: "4px",
                    margin: "0 0 0 10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
