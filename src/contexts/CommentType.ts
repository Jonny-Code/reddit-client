import { Dispatch } from "react";

export interface CommentType {
  _id?: string;
  post?: string;
  points: number;
  postedBy: string;
  postedAt: string;
  body: string;
  isReply: boolean;
  hideComment?: boolean;
  replies: any[];
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
  hideComment: false,
  replies: [],
};
