import React, { useEffect, useContext } from "react";
import "./Posts.css";
import { PostsContext } from "../../contexts/PostsContext";
import { FetchGet } from "../../util/Fetch";
import { getTimeCreated } from "../../util/Dates";

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
            <span className="votes">{p.votes}</span>
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
