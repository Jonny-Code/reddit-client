import { createContext } from "react";
import { CContext } from "./CommentType";
export const CommentsContext = createContext({} as CContext);

export function commentReducer(state: any, payload: any) {
  switch (payload.type) {
    case "add":
      return [...state, payload.comments];
    case "spread":
      for (let i = 0; i < payload.comments.length; i++) {
        payload.comments[i].hideComment = false;
      }
      return [...payload.comments];
    case "hide":
      payload.c.hideComment = !payload.c.hideComment;
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === payload.c._id) {
          state[i] = payload.c;
        }
      }
      return [...state];
    case "remove":
      return state.filter((i: any) => i._id !== payload._id);
    case "update":
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === payload.comments._id) {
          state[i] = payload.comments;
        }
      }
      return [...state];
    case "removeAll":
      return [];

    default:
      return [];
  }
}
