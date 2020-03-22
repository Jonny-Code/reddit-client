import React, { useReducer } from "react";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { Newsfeed } from "./components/newsfeed/Newsfeed";
import { PostsContext, postReducer } from "./contexts/PostsContext";
import "./App.css";

function App() {
  const [posts, dispatch] = useReducer(postReducer, []);

  return (
    <>
      <PostsContext.Provider value={{ posts, dispatch }}>
        <Header />
        <Banner />
        <Newsfeed />
      </PostsContext.Provider>
    </>
  );
}

export default App;
