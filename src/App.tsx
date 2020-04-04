import React, { useReducer } from "react";
import { View } from "./components/view/View";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import {
  subredditContext,
  subredditReducer
} from "./contexts/SubredditContext";
import "./App.css";

function App() {
  const [posts, postsDispatch] = useReducer(postReducer, []);
  const [subreddit, subredditDispatch] = useReducer(subredditReducer, []);

  return (
    <>
      <subredditContext.Provider value={{ subreddit, subredditDispatch }}>
        <PostsContext.Provider value={{ posts, postsDispatch }}>
          <View />
        </PostsContext.Provider>
      </subredditContext.Provider>
    </>
  );
}

export default App;
