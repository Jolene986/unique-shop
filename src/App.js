import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage";
import Shop from './pages/shoppage/shop'
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
