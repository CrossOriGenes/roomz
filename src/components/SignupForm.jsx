import React from "react";

const SignupForm = () => {
  return (
    <div className="form-container sign-up-container">
      <form method="post" id="signup-form">
        <h1 className="heading">Create Account</h1>
        <div className="social-container">
          <button type="button" className="social">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="social">
            <i className="fab fa-github" />
          </button>
        </div>
        <input type="text" placeholder="Name" name="username" id="reg-name" />
        {/* <p id="errRegsUName" /> */}
        <input type="email" placeholder="Email" name="email" id="reg-mail" />
        {/* <p id="errRegsEmail" /> */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="reg-pswrd"
        />
        {/* <p id="errRegsPswrd" /> */}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
