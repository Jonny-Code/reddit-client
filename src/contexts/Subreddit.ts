import { Dispatch } from "react";

export interface Subreddit {
  posts: string[];
  _id?: string;
  name: string;
  heading: string;
  title: string;
  bannerImgSrc: string;
  logoImgSrc: string;
  memberCount: number;
  membersOnline: number;
  createdAt: string;
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
  memberCount: 0,
  membersOnline: 0,
  createdAt: "",
  joined: false,
};
