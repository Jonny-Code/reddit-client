import React, { useRef, useState, useContext } from "react";
import { FetchPostComment } from "../../util/Fetch";
import { CommentsContext } from "../../contexts/CommentsContext";
import { CommentModel, CommentType } from "../../contexts/CommentType";

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

  let thing2 = {
    post: "5e86a68bfeb97545204c8293",
    points: 2,
    postedBy: "timmy",
    postedAt: "1 min ago",
    body: "reply",
    isReply: true,
    repliesTo: ["5e963b0891571b111383ec05"],
    replies: [],
  };

  const handleSend = () => {
    // FetchPostComment(commentsDispatch, thing2, thing2.post);
    // FetchPostComment(commentsDispatch, comments, comment.post);
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
