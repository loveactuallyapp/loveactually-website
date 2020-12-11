
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import DemoFooter from "components/Footers/DemoFooter.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Blog from "views/examples/Blog"
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
     
      <Route
        path="/footer"
        render={(props) => <DemoFooter {...props} />}
      />
      <Route
        path="/blog"
        render={(props) => <Blog {...props} />}
      />
      <Route
        path="/about"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/events"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
