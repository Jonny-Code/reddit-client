import React, { useEffect, useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { ReactComponent as ArrowSvg } from "./svg/arrow.svg";
import { ReactComponent as CommentSvg } from "./svg/comment.svg";
import { PostsContext } from "../../contexts/PostsContext";
import { Post, PostModel } from "../../contexts/Post";
import { SubredditContext } from "../../contexts/SubredditContext";
import { Subreddit, SubredditModel } from "../../contexts/Subreddit";
import { CommentsContext } from "../../contexts/CommentsContext";
import { FetchPostComment } from "../../util/Fetch";
import { About } from "../about/About";
import { Comments } from "./Comments";
import "./PostComments.css";

export const PostComments: React.FC = () => {
  const { posts, postsDispatch } = useContext(PostsContext);
  const { subreddit } = useContext(SubredditContext);
  const { commentsDispatch } = useContext(CommentsContext);
  const [postContent, setPostContent] = useState<Post>(PostModel);
  const [subredditContent, setSubredditContent] = useState<Subreddit>(
    SubredditModel
  );
  const [form, setForm] = useState({ comment: "" });
  const [isShowing, setIsShowing] = useState(false);
  let { subName, postId } = useParams();
  let history = useHistory();

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

  const handleSend = () => {
    let c = {
      post: postId,
      points: 0,
      postedBy: localStorage.userName,
      postedAt: moment(),
      body: form.comment,
      isReply: false,
      repliesTo: [],
      hideComment: false,
      replies: [],
    };

    FetchPostComment(commentsDispatch, c, postId!);
    let temp = postContent;
    temp.comments += 1;
    setPostContent(temp);
    postsDispatch({
      type: "update",
      posts: temp,
    });
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      comment: e.target.value,
    });
  };

  return (
    <>
      <div className="post-comments">
        <Link className="text-decoration-none" to={`/r/${subName}`}>
          <div className="post-comments-content">
            <div
              onClick={(e: any) => {
                e.preventDefault();
              }}
              className="post-comments-container"
            >
              <div className="post-comments-header">
                <div className="d-flex w-100">
                  <div className="post-comments-header-vote-col">
                    <span className="post-comments-arrow-up hover-nav-btn">
                      <ArrowSvg />
                    </span>
                    <span className="post-comments-header-votes">
                      {postContent.votes}
                    </span>
                    <span className="post-comments-header-arrow-down hover-nav-btn">
                      <ArrowSvg className="flip-arrow" />
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
                      onClick={() => {
                        history.goBack();
                      }}
                      style={{
                        margin: "0 30px 0 auto",
                        fontFamily: "monospace",
                        cursor: "pointer",
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
                    background: "#1a1a1b",
                    padding: "0 10px",
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
                        <ArrowSvg />
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
                        <ArrowSvg style={{ transform: "rotate(180deg)" }} />
                      </span>
                    </div>
                    <div
                      style={{
                        flex: 24,
                        margin: "0 6px",
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
                          Posted by u/
                          <span className="hover-underline pointer">
                            {postContent.postedBy}
                          </span>{" "}
                          {moment(postContent.postedAt).fromNow()}
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
                        <button className="btn-comments focus-outline-none d-flex align-items-center">
                          <CommentSvg className="mr-1" /> {postContent.comments}{" "}
                          Comments
                        </button>
                        {localStorage.userToken ? (
                          <button className="btn-share focus-outline-none">
                            Give Award
                          </button>
                        ) : null}
                        <button className="btn-share focus-outline-none">
                          Share
                        </button>
                        <button className="btn-save focus-outline-none">
                          Save
                        </button>
                        <button className="btn-hide focus-outline-none">
                          Hide
                        </button>
                        <button className="btn-report focus-outline-none">
                          Report
                        </button>
                        <span
                          style={{
                            margin: "auto 14px auto auto",
                          }}
                          className="text-light fs-11 font-weight-lighter"
                        >
                          90% Upvoted
                        </span>
                      </div>

                      {localStorage.userToken ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "24px 12px 20px 12px",
                            maxWidth: "648px",
                            width: "100%",
                          }}
                        >
                          <h5
                            style={{
                              margin: "4px 0",
                              color: "white",
                              fontSize: "13px",
                              fontWeight: 290,
                            }}
                          >
                            Comment as{" "}
                            <span
                              style={{
                                cursor: "pointer",
                                color: "#4fbcff",
                              }}
                              className="hover-underline"
                            >
                              {localStorage.userName}
                            </span>
                          </h5>
                          <form
                            style={{
                              width: "100%",
                              display: "flex",
                              border: "1px solid #444449",
                              borderRadius: "3px",
                            }}
                            action="submit"
                          >
                            <textarea
                              onChange={handleChange}
                              className="submit-comment-body"
                              style={{
                                background: "#1a1a1b",
                                color: "#d7dadc",
                                padding: "10px 0 10px 10px",
                                fontSize: "14px",
                                width: "100%",
                              }}
                              placeholder="What are your thoughts?"
                              name="body"
                              id=""
                              cols={20}
                              rows={8}
                            ></textarea>
                          </form>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              background: "#29292c",
                              color: "#d7dadc",
                              padding: "4px 0",
                              borderLeft: "1px solid #444449",
                              borderRight: "1px solid #444449",
                              borderBottom: "1px solid #444449",
                              borderRadius: "3px",
                              width: "100%",
                            }}
                          >
                            <button
                              onClick={handleSend}
                              style={{
                                cursor: form.comment.length
                                  ? "pointer"
                                  : "not-allowed",
                                background: "#d7dadc",
                                color: form.comment.length ? "black" : "grey",
                                padding: "4px 14px",
                                margin: "0 8px 0 0",
                                border: "1px solid #d7dadc",
                                borderRadius: "3px",
                                fontFamily: "monospace",
                                fontWeight: 600,
                              }}
                            >
                              COMMENT
                            </button>
                          </div>
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                  <Comments />
                </div>

                <div className="post-comments-about">
                  <About />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
