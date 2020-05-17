import React, { useState } from "react";
import moment from "moment";
import { FetchPostSubreddit } from "../../util/Fetch";
import "./CreateSubreddit.css";

export const CreateSubreddit: React.FC = () => {
  const [form, setForm] = useState({
    bannerImgSrc: "",
    createdAt: "" as any,
    heading: "",
    joined: false,
    logoImgSrc: "",
    memberCount: 0,
    membersOnline: 0,
    moderators: [],
    name: "",
    posts: [],
    rules: [],
    title: "",
  });

  const handleSend = () => {
    let temp = form;
    temp.createdAt = moment();
    console.log(temp);
    FetchPostSubreddit(null, temp);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1 className="subreddit-form-heading">Create a subreddit</h1>
      <div className="subreddit-form-container">
        <input
          onChange={handleChange}
          type="text"
          name="bannerImgSrc"
          placeholder="bannerImgSrc"
        />
        <input
          onChange={handleChange}
          type="text"
          name="heading"
          placeholder="heading"
        />
        <input
          onChange={handleChange}
          type="text"
          name="logoImgSrc"
          placeholder="logoImgSrc"
        />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
        />
      </div>
      <div className="subreddit-form-btn">
        <button
          onClick={handleSend}
          className="btn-light pointer focus-outline-none"
        >
          POST
        </button>
      </div>
    </>
  );
};
