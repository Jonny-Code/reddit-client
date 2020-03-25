import React, { useEffect, useContext } from "react";
import "./Posts.css";
import { PostsContext } from "../../contexts/PostsContext";
import { FetchGet } from "../../util/Fetch";
import { getTimeCreated } from "../../util/Dates";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

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
    FetchGet(dispatch);
    console.log(getTimeCreated());
  }, []);

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
              <img className="post-img" src={p.imgSrc} />
            ) : null}
            <div className="comments-container">
              <button className="btn-comments">
                {p.comments.length} Comments
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
