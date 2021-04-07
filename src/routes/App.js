import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route default component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
