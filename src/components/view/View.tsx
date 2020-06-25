import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "../banner/Banner";
import { Header } from "../header/Header";
import { Newsfeed } from "../newsfeed/Newsfeed";
import { PostSubmit } from "../post-submit/PostSubmit";
import { PostComments } from "../post-comments/PostComments";
import { Home } from "../home/Home";

export const View: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/r/:subName/comments/:postId">
            <Header />
            <PostComments />
          </Route>
          <Route exact path="/r/:subName">
            <Header />
            <Banner />
            <Newsfeed />
          </Route>
          <Route path="/r/:subName/submit" component={PostSubmit} />

          <Route path="*">
            <h1>wrong path</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
