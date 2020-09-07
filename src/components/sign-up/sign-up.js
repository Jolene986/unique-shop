import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showAlert: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ showAlert: true });
      return;
    } 

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { username });

      this.setState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        showAlert: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      showAlert,
    } = this.state;
    return (
      <>
        <div className="sign-up">
          <h2 className="title">I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              label="Username"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
        </div>
        <div
          className="alert"
          style={{
            transform: showAlert ? "translateY(0)" : "translateY(-100vh)",
            opacity: showAlert ? "1" : "0",
          }}
        >
          <span
            className="closebtn"
            onClick={() => this.setState({ showAlert: false })}
          >
            &times;
          </span>
          <strong>Passwords don't match!</strong>
        </div>
      </>
    );
  }
}

export default SignUp;
