import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign/sign-in.component";
import SignUp from "../../components/sign/sign-up.component";

const SignAnAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignAnAndSignUp;
