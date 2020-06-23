import { Dispatch } from "react";

export interface User {
  _id?: string;
  name: string;
  email: string;
  upvoted: string[];
  downvoted: string[];
}

export interface UContext {
  user: User;
  userDispatch: Dispatch<any>;
}
export const UserModel = {
  _id: "",
  name: "",
  email: "",
  upvoted: [],
  downvoted: [],
};
