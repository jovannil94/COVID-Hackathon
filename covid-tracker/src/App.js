import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import TestingSites from "./Components/TestingSites";
import NavBar from "./Components/NavBar";
import StatesSearch from "./Components/StatesSearch";
import Footer from "./Components/Footer";
import About from "./Components/helper/About";
import Bio from "./Components/helper/Bio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/testingsites"} component={TestingSites} />
        <Route exact path={"/state/:chosen"} component={StatesSearch} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/bio"} component={Bio} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
