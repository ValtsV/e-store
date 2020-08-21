import React, { Component } from "react";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="register">
        <span className="signup-title">Sign up</span>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleOnChange}
            label="name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleOnChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleOnChange}
            label="confirm password"
            required
          />
          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
