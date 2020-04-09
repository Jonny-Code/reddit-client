import React, { useRef, useState, useEffect, useContext } from "react";
import { FetchPost } from "../../util/Fetch";
import { PostsContext } from "../../contexts/PostsContext";
import { PostModel } from "../../contexts/Post";

export const CreatePost: React.FC = () => {
  const [post, setPost] = useState(PostModel);
  let count = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    console.log(false);
    if (count.current > Object.values(post).length - 1) {
      console.log(true);
    }
  }, [count.current, post]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (count.current === Object.values(post).length - 2) {
      console.log("ready to send", post);
      FetchPost(postsDispatch, post);
      return;
    }
    count.current++;
    console.log(count.current);
    console.log(inputRef.current?.value);
    formRef.current?.reset();
    if (Object.values(post)[count.current] === 0) {
      console.log(Object.values(post)[count.current]);
      count.current++;
    }
    console.log(count.current);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.clear();
    console.log(count.current);
    setPost({
      ...post,
      [Object.keys(post)[count.current]]: e.target.value
    });
    console.log(Object.keys(post)[count.current], post);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <pre
          style={{
            whiteSpace: "normal",
            wordBreak: "break-all",
            maxWidth: "500px"
          }}
          className="text-white"
        >
          <h3>{JSON.stringify(post)}</h3>
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
            <button>send</button>
          </div>
        </div>
      </div>
    </>
  );
};
