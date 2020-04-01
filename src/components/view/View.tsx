import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Banner } from "../banner/Banner";
import { Header } from "../header/Header";
import { Newsfeed } from "../newsfeed/Newsfeed";

export const View: React.FC = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>home path</h1>
          </Route>

          <Route path="/r/:subName">
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
