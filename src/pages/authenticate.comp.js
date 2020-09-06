import React from "react";
import Login from "../components/login/login.comp";
import Register from "../components/register/register.comp";
import { selectAuthView } from "../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./authenticate.styles.scss";
import CustomButton from "../components/custom-button/custom-button.comp";
import { toggleView } from "../redux/auth/auth.actions";

const AuthenticatePage = ({ view, toggleView }) => {
  if (view) {
  }

  return (
    <div className="auth">
      <div className="auth-header">
        <CustomButton
          className={`btn-auth-header ${
            view ? "btn-auth-header-dimmed" : null
          }`}
          onClick={() => {
            if (view) {
              toggleView();
            }
          }}
        >
          sign in
        </CustomButton>
        <CustomButton
          className={`btn-auth-header ${
            view ? null : "btn-auth-header-dimmed"
          }`}
          onClick={() => {
            if (!view) {
              toggleView();
            }
          }}
        >
          register
        </CustomButton>
      </div>

      <div className="auth-inner">{view ? <Register /> : <Login />}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  view: selectAuthView,
});

const mapDispatchToProps = (dispatch) => ({
  toggleView: () => dispatch(toggleView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatePage);
