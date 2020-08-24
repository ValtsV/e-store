import React, { Component } from "react";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

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
    }
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <span>sign in</span>
        <span>register</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleOnChange={this.handleOnChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleOnChange={this.handleOnChange}
            required
          />
          <span>forgot password?</span>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle}>
            Sign in With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
