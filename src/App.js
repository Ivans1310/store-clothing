import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopData from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>s
  </div>
);
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopData} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
