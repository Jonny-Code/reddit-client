import React, { useRef, useState, useContext } from "react";
import { FetchPostComment } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { CommentModel, CommentType } from "../../contexts/CommentType";
import { useParams } from "react-router-dom";

export const CreateComment: React.FC = () => {
  const [comment, setComment] = useState({
    post: "",
    points: 0,
    postedBy: "",
    postedAt: "",
    body: "",
    isReply: true,
    repliesTo: "",
    replies: [],
  });
  let count = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { comments, commentsDispatch } = useContext(CommentsContext);
  let { postId } = useParams();

  let thing2 = {
    post: "",
    points: 12,
    postedBy: "Laborum",
    postedAt: "2 id irure",
    body:
      "Nostrud commodo ut laborum anim aliqua consequat pariatur ex duis quis. Incididunt elit minim id officia veniam ea veniam.",
    isReply: true,
    repliesTo: ["5e989a838068e92eb0a78752", "5e98ba658068e92eb0a78753"],
    hideComment: false,
    replies: [],
  };

  const handleSend = () => {
    thing2.post = postId!;
    FetchPostComment(commentsDispatch, thing2, thing2.post!);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    count.current++;
    formRef.current?.reset();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.clear();
    setComment({
      ...comment,
      [Object.keys(comment)[count.current]]: e.target.value,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <pre
          style={{
            whiteSpace: "normal",
            wordBreak: "break-all",
            maxWidth: "500px",
          }}
          className="text-white"
        >
          <h3>{JSON.stringify(comment)}</h3>
        </pre>
      </div>

      <div className="d-flex nav-container-news">
        <div className="d-flex align-items-center w-100">
          <div className="search-container">
            <form ref={formRef} onSubmit={handleSubmit} action="search">
              <input
                ref={inputRef}
                onChange={handleChange}
                type="text"
                name="post"
                placeholder="Create Post"
              />
            </form>
            <button onClick={handleSend}>send</button>
          </div>
        </div>
      </div>
    </>
  );
};
