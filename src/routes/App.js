import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import PageNotFound from "../pages/404";
import MenuBar from "../components/NavBar";

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route default component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
