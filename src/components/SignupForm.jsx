import { useRef, useState } from "react";
import Alert from "./Alert";

const SignupForm = ({ onSubmit, isLoading, errors }) => {
  const nameRef = useRef();
  const mailRef = useRef();
  const passwrdRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      username: nameRef.current.value,
      email: mailRef.current.value,
      password: passwrdRef.current.value,
    };

    onSubmit(userData);
  }
  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 className="heading">Create Account</h1>
        <div className="social-container">
          <button type="button" className="social">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="social">
            <i className="fab fa-github" />
          </button>
        </div>
        {errors && (
          <Alert alert_type="danger">
            <strong>{errors}</strong>
          </Alert>
        )}
        <input
          type="text"
          placeholder="Name"
          name="username"
          ref={nameRef}
          required
          minLength={3}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={mailRef}
          required
          minLength={13}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={passwrdRef}
          required
          minLength={5}
        />
        <button className="submit-btn">
          {isLoading ? (
            <>
              <div className="spinner-border text-dark" role="status" />
              Signing up...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
