import React, { useContext } from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/PostsContext";
import { ReactComponent as Arrow } from "./svg/arrow.svg";
import { ReactComponent as Comment } from "./svg/comment.svg";
import { Post } from "../../contexts/Post";
import "./Posts.css";

export const Posts: React.FC = () => {
  const { posts } = useContext(PostsContext);
  let { subName } = useParams();

  return (
    <>
      {posts.map((p: Post) => (
        <Link
          key={p._id}
          style={{ textDecoration: "none" }}
          to={`/r/${subName}/comments/${p._id}`}
        >
          <div className="posts-container">
            <div className="col-1-posts">
              <span
                className="hover-nav-btn br-2 pointer"
                style={{
                  height: "20px",
                  width: "70%",
                  padding: "3px 0",
                  margin: "5px auto 4px auto",
                  textAlign: "center",
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
                  textAlign: "center",
                }}
              >
                <Arrow style={{ transform: "rotate(180deg)" }} />
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
