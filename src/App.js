import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import Shop from './pages/shoppage/shop'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
