import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../src/Pages/Home";
import Work from "../src/Pages/Work";
import MyNavbar from "../src/Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
