import React, { useState } from "react";
import { createUserDocument, LoginUser } from "../../util/models/user";

import { signInWithGooglePopup } from "../../util/firebase/firebase.util";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./login-form.scss";

const defaultParams = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultParams);

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const { email, password } = formFields;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setError({
      status: false,
      message: "",
    });
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = async (evt) => {
    evt.preventDefault();
    const { email, password } = formFields;
    try {
      await LoginUser(email, password);

      setFormFields(defaultParams);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setError(() => {
            return {
              status: true,
              message: "wrong-password",
            };
          });

          break;
        case "auth/user-not-found":
          setError(() => {
            return {
              status: true,
              message: "user-not-found",
            };
          });

          break;

        default:
          console.log(error);
          break;
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have account? </h2>
      <span>Login with you email and password</span>
      {error.status && (
        <p style={{ color: "red", textAlign: "center" }}>{error.message}</p>
      )}
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Login</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            Google Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
