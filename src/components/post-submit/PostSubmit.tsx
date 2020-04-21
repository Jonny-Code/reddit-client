import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SubredditContext } from "../../contexts/SubredditContext";
import { Subreddit, SubredditModel } from "../../contexts/Subreddit";
import { Header } from "../header/Header";
import { DropdownSubreddit } from "../dropdowns/DropdownSubreddit";
import { ReactComponent as PostSvg } from "./svg/post.svg";
import { ReactComponent as ImageSvg } from "./svg/image.svg";
import { ReactComponent as LinkSvg } from "./svg/link.svg";
import { ReactComponent as PollSvg } from "./svg/poll.svg";
import { ReactComponent as PlusSvg } from "./svg/plus.svg";
import { ReactComponent as DownArrowSvg } from "./svg/down-arrow-1.svg";
import "./PostSubmit.css";

export const PostSubmit: React.FC = () => {
  const { subreddit } = useContext(SubredditContext);
  const [subredditContent, setSubredditContent] = useState<Subreddit>(
    SubredditModel
  );
  let { subName } = useParams();

  useEffect(() => {
    if (!Array.isArray(subreddit)) {
      setSubredditContent(subreddit);
    }
  });

  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <div className="post-submit">
      <Header />
      <Link style={{ textDecoration: "none" }} to={`/r/${subName}`}>
        <div className="post-submit-content">
          <div className="post-submit-container">
            <div
              onClick={(e: any) => {
                e.preventDefault();
              }}
              style={{
                cursor: "auto",
                margin: "46px 0 0 0",
                padding: "40px 0 0 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  maxWidth: "740px",
                  width: "100%",
                  padding: "0 10px",
                  margin: "0 20px 0 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 0 18px 0",
                    padding: "0 4px",
                    borderBottom: "1px solid #343536",
                  }}
                >
                  <h4
                    style={{
                      display: "inline",
                      margin: "2px 0 5px 0",
                      color: "lightgrey",
                      fontFamily: "Arial",
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                  >
                    Create a post
                  </h4>

                  <h4
                    style={{
                      display: "inline",
                      margin: "6px 2px 5px 2px",
                      color: "lightgrey",
                      fontFamily: "monospace",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    DRAFTS
                    <span
                      style={{
                        margin: "0 0 0 2px",
                        padding: "1px 3px",
                        background: "grey",
                        color: "black",
                        fontFamily: "Arial",
                        fontSize: "13px",
                        borderRadius: "2px",
                        fontWeight: 500,
                      }}
                    >
                      0
                    </span>
                  </h4>
                </div>
                <DropdownSubreddit color="#1a1a1b" size={{ x: 292, y: 40 }} />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    margin: "12px 0 0 0",
                  }}
                >
                  <button
                    className="submit-post-btn submit-post-btn-active hover-submit-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "16px 0",
                      fontSize: "13px",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    <PostSvg
                      style={{
                        margin: "0 4px 0 0",
                      }}
                    />{" "}
                    Post
                  </button>
                  <button
                    className="submit-post-btn hover-submit-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "16px 0",
                      border: "none",
                      borderRight: "1px solid #2f2f31",
                      borderBottom: "1px solid #2f2f31",
                      color: "grey",
                      fontSize: "13px",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    <ImageSvg
                      style={{
                        margin: "0 4px 0 0",
                      }}
                    />{" "}
                    Image & Video
                  </button>
                  <button
                    className="submit-post-btn hover-submit-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "16px 0",
                      border: "none",
                      borderRight: "1px solid #2f2f31",
                      borderBottom: "1px solid #2f2f31",
                      color: "grey",
                      fontSize: "13px",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    <LinkSvg
                      style={{
                        margin: "0 4px 0 0",
                      }}
                    />
                    Link
                  </button>
                  <button
                    className="submit-post-btn hover-submit-btn"
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "16px 0",
                      border: "none",
                      borderBottom: "1px solid #2f2f31",
                      color: "grey",
                      fontSize: "13px",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                      cursor: "pointer",
                    }}
                  >
                    <PollSvg
                      style={{
                        margin: "0 4px 0 0",
                      }}
                    />
                    Poll
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    padding: "10px 0",
                    background: "#1a1a1b",
                  }}
                >
                  <div
                    style={{
                      height: "90%",
                      width: "100%",
                      margin: "0 16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <form
                      style={{
                        margin: "0 12px 12px 12px",
                        width: "100%",
                        display: "flex",
                      }}
                      action="submit"
                    >
                      <input
                        onChange={handleChange}
                        className="submit-post-title"
                        style={{
                          background: "#1a1a1b",
                          color: "#d7dadc",
                          padding: "10px 0 10px 12px",
                          borderRadius: "3px",
                          fontSize: "14px",
                          width: "100%",
                        }}
                        autoComplete="off"
                        type="text"
                        name="post"
                        placeholder="Title"
                      />
                    </form>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 12px",

                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          background: "#29292c",
                          color: "#d7dadc",
                          padding: "16px 0",
                          borderLeft: "1px solid #444449",
                          borderRight: "1px solid #444449",
                          borderTop: "1px solid #444449",
                          borderRadius: "3px",
                          width: "100%",
                        }}
                      ></div>
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
                          className="submit-post-body"
                          style={{
                            background: "#1a1a1b",
                            color: "#d7dadc",
                            padding: "10px 0 10px 10px",
                            fontSize: "14px",
                            width: "100%",
                          }}
                          placeholder="Text (optional)"
                          name="post-body"
                          id=""
                          cols={30}
                          rows={8}
                        ></textarea>
                      </form>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "12px 0 0 0",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#1a1a1b",
                            padding: "3px 10px",
                            margin: "4px 2px 4px 0",
                            border: "1px solid #2f2f31",
                            borderRadius: "3px",
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "monospace",
                            cursor: "pointer",
                          }}
                        >
                          <PlusSvg
                            style={{
                              margin: "0 2px 0 0",
                            }}
                          />
                          OC
                        </button>
                        <button
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#1a1a1b",
                            padding: "3px 10px",
                            margin: "4px 2px",
                            border: "1px solid #2f2f31",
                            borderRadius: "3px",
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "monospace",
                            cursor: "pointer",
                          }}
                        >
                          <PlusSvg
                            style={{
                              margin: "0 2px 0 0",
                            }}
                          />
                          SPOILER
                        </button>
                        <button
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#1a1a1b",
                            padding: "3px 10px",
                            margin: "4px 2px",
                            border: "1px solid #2f2f31",
                            borderRadius: "3px",
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "monospace",
                            cursor: "pointer",
                          }}
                        >
                          <PlusSvg
                            style={{
                              margin: "0 2px 0 0",
                            }}
                          />
                          NSFW
                        </button>
                        <button
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#1a1a1b",
                            padding: "3px 10px",
                            margin: "4px 2px",
                            border: "1px solid #2f2f31",
                            borderRadius: "3px",
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "monospace",
                            cursor: "pointer",
                          }}
                        >
                          FLAIR <DownArrowSvg />
                        </button>
                      </div>
                      <span style={{ display: "flex", margin: "0 6px 0 auto" }}>
                        <button
                          style={{
                            marginRight: "2px",
                            height: "31px",
                          }}
                          className="btn-dark pointer focus-outline-none"
                        >
                          SAVE DRAFT
                        </button>
                        <button
                          style={{
                            marginLeft: "2px",
                            width: "80px",
                            height: "31px",
                          }}
                          className="btn-light pointer focus-outline-none"
                        >
                          POST
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-submit-about"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
