import { createContext } from "react";
import { UContext } from "./User";

export const UserContext = createContext({} as UContext);

export function userReducer(state: any, payload: any) {
  switch (payload.type) {
    // case "add":
    //   return [...state, payload.subreddit];
    case "spread":
      return payload.user;
    // case "remove":
    //   return state.filter((i: any) => i._id !== payload._id);
    // case "update":
    //   for (let i = 0; i < state.length; i++) {
    //     if (state[i]._id === payload.user._id) {
    //       state[i] = payload.user;
    //     }
    //   }
    //   return [...state];

    default:
      return null;
  }
}
