import React, { useReducer } from "react";
import { View } from "./components/view/View";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import {
  SubredditsContext,
  subredditReducer
} from "./contexts/SubredditsContext";
import "./App.css";

function App() {
  const [posts, postsDispatch] = useReducer(postReducer, []);
  const [subreddits, subredditsDispatch] = useReducer(subredditReducer, []);

  return (
    <>
      <SubredditsContext.Provider value={{ subreddits, subredditsDispatch }}>
        <PostsContext.Provider value={{ posts, postsDispatch }}>
          <View />
        </PostsContext.Provider>
      </SubredditsContext.Provider>
    </>
  );
}

export default App;
