import { Dispatch } from "react";

export interface Post {
  _id?: string;
  name?: string;
  votes: number;
  postedBy: string;
  postedAt: string;
  title: string;
  imgSrc: string;
  body: string;
  comments: number;
}

export interface PContext {
  posts: Post[];
  postsDispatch: Dispatch<any>;
}

export const PostModel = {
  _id: "",
  votes: 0,
  postedBy: "",
  postedAt: "",
  title: "",
  imgSrc: "",
  body: "",
  comments: 0
};
