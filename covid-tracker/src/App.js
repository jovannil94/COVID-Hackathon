import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import TestingSites from "./Components/TestingSites";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      COVID TRACKER
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/testingsites"} component={TestingSites}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
