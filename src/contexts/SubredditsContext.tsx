import { createContext } from "react";

interface Subreddit {
  posts: Array<string>;
  _id: string;
  name: string;
  heading: string;
  title: string;
  bannerImgSrc: string;
  logoImgSrc: string;
  joined: boolean;
}

export const SubredditsContext = createContext<Subreddit | null | any>(null);

export function subredditReducer(state: any, payload: any) {
  switch (payload.type) {
    case "add":
      return [...state, payload.subreddits];
    case "spread":
      return [...payload.subreddits];
    case "remove":
      return state.filter((i: any) => i._id !== payload._id);
    case "update":
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === payload.subreddits._id) {
          state[i] = payload.subreddits;
        }
      }
      return [...state];

    default:
      return [];
  }
}
