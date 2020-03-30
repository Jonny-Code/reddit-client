import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "../banner/Banner";
import { Header } from "../header/Header";
import { Newsfeed } from "../newsfeed/Newsfeed";
import { SubredditsContext } from "../../contexts/SubredditsContext";
import { PostsContext } from "../../contexts/PostsContext";
import { FetchGetSubreddits } from "../../util/Fetch";

export const View: React.FC = () => {
  const { subreddits, subredditsDispatch } = useContext(SubredditsContext);
  const { postsDispatch } = useContext(PostsContext);

  useEffect(() => {
    if (!subreddits.length) {
      FetchGetSubreddits(subredditsDispatch, postsDispatch);
    }
  }, [subredditsDispatch, postsDispatch, subreddits]);

  return (
    <>
      <Router>
        <Switch>
          <Route path={`/r/Ubuntu`}>
            <Header />
            <Banner />
            <Newsfeed />
          </Route>
          <Route path="*">
            <h1>wrong path</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
