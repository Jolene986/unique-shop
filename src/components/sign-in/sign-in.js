import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle,auth } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password}= this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({
        email:'',
        password:''
      })

    } catch (error) {
      console.log(error)
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleButton>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
