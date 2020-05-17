import { createContext } from "react";
import { PContext } from "./Post";
export const PostsContext = createContext({} as PContext);

export function postReducer(state: any, payload: any) {
  switch (payload.type) {
    case "add":
      return [...state, payload.posts];
    case "spread":
      return [...payload.posts];
    case "remove":
      return state.filter((i: any) => i._id !== payload._id);
    case "update":
      console.log(state, payload);
      for (let i = 0; i < state.length; i++) {
        console.log(state[i]._id, payload.posts._id);
        if (state[i]._id === payload.posts._id) {
          state[i] = payload.posts;
        }
      }
      console.log(state);
      return [...state];

    default:
      return [];
  }
}
