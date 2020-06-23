import React, { useReducer } from "react";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import {
  SubredditContext,
  subredditReducer,
} from "./contexts/SubredditContext";
import { commentReducer, CommentsContext } from "./contexts/CommentsContext";
import { View } from "./components/view/View";
import "./App.css";
import { userReducer, UserContext } from "./contexts/UserContext";

function App() {
  const [posts, postsDispatch] = useReducer(postReducer, []);
  const [subreddit, subredditDispatch] = useReducer(subredditReducer, []);
  const [comments, commentsDispatch] = useReducer(commentReducer, []);
  const [user, userDispatch] = useReducer(userReducer, []);

  return (
    <>
      <UserContext.Provider value={{ user, userDispatch }}>
        <SubredditContext.Provider value={{ subreddit, subredditDispatch }}>
          <PostsContext.Provider value={{ posts, postsDispatch }}>
            <CommentsContext.Provider value={{ comments, commentsDispatch }}>
              <View />
            </CommentsContext.Provider>
          </PostsContext.Provider>
        </SubredditContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
