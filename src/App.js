import React, {Component} from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
//PAGES
import HomePage from "./pages/homepage/homePage";
import Shop from './pages/shoppage/shop';
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
import CheckOutPage from "./pages/checkoutpage/checkOutPage";
import ContactPage from './pages/contactpage/contactPage'
// COMPONENTS
import Header from "./components/header/header";
//REDUX
import {connect} from 'react-redux'
import {setCurrentUser }from './redux/user/user-actions'
import { selectCurrentUser } from "./redux/user/user.selectors";


class App extends Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth); //if signed out it will be null
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps = (state)=> ({
  currentUser : selectCurrentUser(state)
  })
const mapDispatchToProps = dispatch=> ({
setCurrentUser : user => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
