import { Dispatch } from "react";

export interface CommentType {
  _id?: string;
  post?: string;
  points: number;
  postedBy: string;
  postedAt: string;
  body: string;
  isReply: boolean;
  replies: string[];
}

export interface CContext {
  comments: CommentType[];
  commentsDispatch: Dispatch<any>;
}

export const CommentModel: CommentType = {
  _id: "",
  post: "",
  points: 0,
  postedBy: "",
  postedAt: "",
  body: "",
  isReply: false,
  replies: [],
};
