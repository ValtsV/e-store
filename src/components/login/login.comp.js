import React, { Component } from "react";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./login.styles.scss";
import "../../scss/_utilities.styles.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
      alert("Incorrect username / email");
    }
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <div className="signin-upper">
          <form className="form" onSubmit={this.handleSubmit}>
            <FormInput
              className="qwe"
              name="email"
              type="email"
              value={this.state.email}
              label="email"
              placeholder=" "
              handleOnChange={this.handleOnChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              label="password"
              placeholder=" "
              handleOnChange={this.handleOnChange}
              required
            />
            <div className="form-small-text">forgot password?</div>
            <CustomButton className="btn btn-signin" type="submit">
              sign in
            </CustomButton>
          </form>
        </div>
        <span className="surrounding-lines">or</span>
        <CustomButton
          className="btn-signin-google"
          type="button"
          onClick={signInWithGoogle}
        >
          sign in with Google
        </CustomButton>
      </div>
    );
  }
}

export default Login;
