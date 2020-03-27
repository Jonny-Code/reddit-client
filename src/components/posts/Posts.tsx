import React, { useEffect, useContext } from "react";
import "./Posts.css";
import { PostsContext } from "../../contexts/PostsContext";
import { FetchGet } from "../../util/Fetch";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as Comment } from "./svg/comment.svg";

interface Post {
  _id: string;
  votes: number;
  postedBy: string;
  postedAt: string;
  title: string;
  imgSrc: string;
  body: string;
  comments: Array<string>;
}

export const Posts: React.FC = () => {
  const { posts, dispatch } = useContext(PostsContext);

  useEffect(() => {
    if (!posts.length) FetchGet(dispatch);
  }, [dispatch, posts]);

  return (
    <>
      {posts.map((p: Post) => (
        <div key={p._id} className="posts-container">
          <div className="col-1-posts">
            <span
              className="hover-nav-btn br-2 pointer"
              style={{
                height: "20px",
                width: "70%",
                padding: "3px 0",
                margin: "5px auto 4px auto",
                textAlign: "center"
              }}
            >
              <Arrow />
            </span>
            <span className="votes fs-14 font-weight-bold mr-1 ml-1">
              {p.votes}
            </span>
            <span
              className="hover-nav-btn br-2 pointer"
              style={{
                height: "20px",
                width: "70%",
                padding: "0 0 7px 0",
                margin: "4px auto 5px auto",
                textAlign: "center"
              }}
            >
              <Arrow style={{ transform: "rotate(180deg)" }} />
            </span>
          </div>
          <div className="col-4-posts">
            <small className="posted-by">
              Posted by u/
              <span className="pointer hover-underline">{p.postedBy}</span>{" "}
              {p.postedAt}
            </small>
            <h3 className="post-title">{p.title}</h3>
            {p.imgSrc.length ? (
              <div className="d-flex justify-content-center">
                <img className="post-img" src={p.imgSrc} alt="post" />
              </div>
            ) : null}
            <div className="d-flex">
              <button className="btn-comments d-flex align-items-center">
                <Comment className="mr-1" /> {p.comments.length} Comments
              </button>
              <button className="btn-share">Share</button>
              <button className="btn-save">Save</button>
              <button className="btn-options">...</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
