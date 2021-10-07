import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import HomePageComponent from "./pages/HomePageComponent";
import LoginPageComponent from "./pages/LoginPageComponent";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPageComponent />
        </Route>
        <Route path="/home">
          <HomePageComponent />
        </Route>
      </Switch>
    </Router>
  );
}