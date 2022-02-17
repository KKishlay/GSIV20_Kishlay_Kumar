import React from "react";
import HomeScreen from "./components/HomeScreen";
import ListItemDetail from "./components/ListItemDetail";

import "./App.css";
import { Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/lists/:id" component={ListItemDetail} />
    </Switch>
  );
};

export default App;
