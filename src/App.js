import React, {Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {auth} from './firebase/firebase.utils'
//PAGES
import HomePage from "./pages/homepage/homePage";
import Shop from './pages/shoppage/shop';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
// COMPONENTS
import Header from "./components/header/header";

class App extends Component {
  state={
    currentUser:null
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=> this.setState({currentUser:user}))
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
