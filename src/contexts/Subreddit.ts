import { Dispatch } from "react";

export interface Subreddit {
  posts: string[];
  _id?: string;
  name: string;
  heading: string;
  title: string;
  bannerImgSrc: string;
  logoImgSrc: string;
  joined: boolean;
}

export interface SContext {
  subreddit: Subreddit;
  subredditDispatch: Dispatch<any>;
}

export const SubredditModel = {
  posts: [],
  _id: "",
  name: "",
  heading: "",
  title: "",
  bannerImgSrc: "",
  logoImgSrc: "",
  joined: false,
};
