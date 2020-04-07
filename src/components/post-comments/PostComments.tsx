import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as Comment } from "./svg/comment.svg";
import { PostsContext } from "../../contexts/PostsContext";
import { Post, PostModel } from "../posts/Post";
import "./PostComments.css";

export const PostComments: React.FC = () => {
  const { posts } = useContext(PostsContext);
  const [postContent, setPostContent] = useState<Post>(PostModel);
  const [isShowing, setIsShowing] = useState(false);
  let { subName, postId } = useParams();

  useEffect(() => {
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
                    position: "fixed",
                    left: 0,
                    right: 0,
                    maxWidth: "1200px",
                    margin: "0 auto"
                  }}
                  className="d-flex"
                >
                  <div
                    style={{
                      borderLeft: "1px solid rgb(60, 60, 63)",
                      borderRight: "1px solid rgb(60, 60, 63)",
                      padding: "0 4px",
                      height: "26px",
                      maxWidth: "112px",
                      justifyContent: "space-evenly",
                      alignItems: "center"
                    }}
                    className="flex-1 d-flex"
                  >
                    <span
                      className="hover-nav-btn pointer d-flex align-items-center justify-content-center"
                      style={{
                        height: "26px",
                        width: "28px",
                        paddingTop: "2px"
                      }}
                    >
                      <Arrow />
                    </span>
                    <span
                      style={{ width: "44px" }}
                      className="votes fs-14 font-weight-bold"
                    >
                      213
                    </span>
                    <span
                      className="hover-nav-btn pointer d-flex align-items-center justify-content-center"
                      style={{
                        height: "26px",
                        width: "28px",
                        paddingBottom: "3px"
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
                        borderRadius: "4px"
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Comment />
                    </span>
                    <h4
                      style={{ margin: "0", padding: "0 0 2px 10px" }}
                      className="text-white font-weight-lighter"
                    >
                      {postContent.title}
                    </h4>
                    <h4
                      style={{ margin: "0 0 0 auto", fontFamily: "monospace" }}
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
                style={{ cursor: "auto" }}
              ></div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
