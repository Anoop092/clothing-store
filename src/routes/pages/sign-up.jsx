import React from "react";
import LoginForm from "../../components/login-form/login-form";
import SignupForm from "../../components/sign-up-form/signup-form";
import "./sign-up.scss";

const SignUp = () => {
  return (
    <div className="authentication-container">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default SignUp;
