import { useRef, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Alert from "./Alert";

const SignInForm = ({ onSubmit, isLoading, signInErrors }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const mailRef = useRef();
  const pswrdRef = useRef();

  function handleGoogleLogin() {
    window.open("http://localhost:5000/api/auth/google/google-login", "_blank");
    window.addEventListener("message", (e) => {
      if (e.origin !== "http://localhost:5000") return;
      if (e.data.success) {
        authCtx.login(e.data.token);
        navigate("../home");
        toast.success(e.data.message);
      } else {
        toast.error("Failed to Login! Try again");
        return;
      }
      // console.log(e.data);
    });
  }

  function handleLoginFormSubmit(e) {
    e.preventDefault();

    const loginData = {
      email: mailRef.current.value,
      password: pswrdRef.current.value,
    };

    onSubmit(loginData);
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleLoginFormSubmit} autoComplete="off">
        <h1 className="heading">Sign in</h1>
        <div className="social-container">
          <button type="button" className="social" onClick={handleGoogleLogin}>
            <i className="fab fa-google" />
          </button>
          <button type="button" className="social">
            <i className="fab fa-github" />
          </button>
        </div>
        {signInErrors && (
          <Alert alert_type="danger">
            <strong>{signInErrors}</strong>
          </Alert>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={mailRef}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={pswrdRef}
          required
        />
        <a href="#" className="mt-4">
          Forgot your password?
        </a>
        <button className="submit-btn">
          {isLoading ? (
            <>
              <div className="spinner-border text-dark" role="status" />
              Logging in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
