import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
