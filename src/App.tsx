import React, { useReducer } from "react";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import {
  SubredditContext,
  subredditReducer,
} from "./contexts/SubredditContext";
import { commentReducer, CommentsContext } from "./contexts/CommentsContext";
import { View } from "./components/view/View";
import "./App.css";

function App() {
  const [posts, postsDispatch] = useReducer(postReducer, []);
  const [subreddit, subredditDispatch] = useReducer(subredditReducer, []);
  const [comments, commentsDispatch] = useReducer(commentReducer, []);

  return (
    <>
      <SubredditContext.Provider value={{ subreddit, subredditDispatch }}>
        <PostsContext.Provider value={{ posts, postsDispatch }}>
          <CommentsContext.Provider value={{ comments, commentsDispatch }}>
            <View />
          </CommentsContext.Provider>
        </PostsContext.Provider>
      </SubredditContext.Provider>
    </>
  );
}

export default App;
