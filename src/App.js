import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
//PAGES
import HomePage from "./pages/homepage/homePage";
import Shop from './pages/shoppage/shop';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
// COMPONENTS
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
