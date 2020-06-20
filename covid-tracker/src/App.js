import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../src/Components/HomePage";
import TestingSites from "../src/Components/TestingSites";
import NavBar from "../src/Components/NavBar";
import Footer from "../src/Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      COVID TRACKER
      <NavBar />
      <Switch>
        <Route component={Homepage} />
        <Route component={Footer} />
        <Route component={TestingSites} />
      </Switch>
    </div>
  );
}

export default App;
