import React, { useReducer, useEffect } from "react";
import { View } from "./components/view/View";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import {
  SubredditContext,
  subredditReducer,
} from "./contexts/SubredditContext";
import "./App.css";
import { commentReducer, CommentsContext } from "./contexts/CommentsContext";

function App() {
  const [posts, postsDispatch] = useReducer(postReducer, []);
  const [subreddit, subredditDispatch] = useReducer(subredditReducer, []);
  const [comments, commentsDispatch] = useReducer(commentReducer, []);

  useEffect(() => {
    let obj = (function () {
      let _prop1 = "private info";
      return {
        prop2: 1212,
        get prop1() {
          return "asd" + _prop1;
        },
        set prop1(_val) {
          _prop1 = _val;
        },
      };
    })();
    obj.prop1 = "123";
    console.log(obj);
  }, []);

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
