import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  );
}

export default Routes;
