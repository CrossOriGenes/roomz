import React from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  function handleGoogleLogin() {
    window.open(
      "http://localhost:5000/api/auth/google/google-login",
      "_blank"
      //   "width=500,height=600"
    );
    window.addEventListener("message", (e) => {
      if (e.origin !== "http://localhost:5000") return;
      if (e.data) {
        // console.log(e.data);
        // set token to context api
        navigate("../home");
        // toast login message
      } else {
        alert("Failed to Login! Try again");
        return;
      }
    });
  }

  return (
    <div className="form-container sign-in-container">
      <form method="post" id="login-form">
        <h1 className="heading">Sign in</h1>
        <div className="social-container">
          <button type="button" className="social" onClick={handleGoogleLogin}>
            <i className="fab fa-google" />
          </button>
          <button type="button" className="social">
            <i className="fab fa-github" />
          </button>
        </div>
        <input type="email" placeholder="Email" name="mail" id="login-mail" />
        {/* <p id="errLoginMail" /> */}
        <input
          type="password"
          placeholder="Password"
          name="pswrd"
          id="login-pswrd"
        />
        {/* <p id="errLoginPswrd" /> */}
        <a href="#" className="mt-4">
          Forgot your password?
        </a>
        <button className="hover-slide">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
