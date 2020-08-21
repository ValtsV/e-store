import React from "react";
import Login from "../components/login/login.comp";
import Register from "../components/register/register.comp";

const AuthenticatePage = () => (
  <div className="authenticate">
    <Login />
    <br />
    <Register />
  </div>
);

export default AuthenticatePage;
