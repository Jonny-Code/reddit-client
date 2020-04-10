import { createContext } from "react";
import { SContext } from "./Subreddit";

export const SubredditContext = createContext({} as SContext);

export function subredditReducer(state: any, payload: any) {
  switch (payload.type) {
    // case "add":
    //   return [...state, payload.subreddit];
    case "spread":
      return payload.subreddit;
    // case "remove":
    //   return state.filter((i: any) => i._id !== payload._id);
    // case "update":
    //   for (let i = 0; i < state.length; i++) {
    //     if (state[i]._id === payload.subreddit._id) {
    //       state[i] = payload.subreddit;
    //     }
    //   }
    //   return [...state];

    default:
      return null;
  }
}
