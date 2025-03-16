import React from "react";
import { useState } from "react";

const Auth = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="banner2">
        <video src="/images/auth-bg.mp4" muted autoPlay loop />
        <div className="auth-block d-flex justify-content-center">
          <div
            className={`container ${toggle ? "right-panel-active" : ""}`}
            id="auth-container"
          >
            {/* signup section */}
            <div className="form-container sign-up-container">
              <form method="post" id="signup-form">
                <h1 className="heading">Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-google" />
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-github" />
                  </a>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  id="reg-name"
                />
                {/* <p id="errRegsUName" /> */}
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="reg-mail"
                />
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
            {/* sign-in section */}
            <div className="form-container sign-in-container">
              <form method="post" id="login-form">
                <h1 className="heading">Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-google" />
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-github" />
                  </a>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="mail"
                  id="login-mail"
                />
                {/* <p id="errLoginMail" /> */}
                <input
                  type="password"
                  placeholder="Password"
                  name="pswrd"
                  id="login-pswrd"
                />
                {/* <p id="errLoginPswrd" /> */}
                <a href="#" className="mt-4">Forgot your password?</a>
                <button className="hover-slide">Sign In</button>
              </form>
            </div>
            {/*   image overlay section    */}
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <img src="images/auth-card-img2.jpg" alt="vectors" />
                  <strong>
                    Already a member?{" "}
                    <span
                      id="signIn"
                      onClick={() => setToggle((toggle) => !toggle)}
                    >
                      Sign In
                    </span>
                  </strong>
                </div>
                <div className="overlay-panel overlay-right">
                  <img src="images/auth-card-img.jpg" alt="vectors" />
                  <strong>
                    New Member?{" "}
                    <span
                      id="signUp"
                      onClick={() => setToggle((toggle) => !toggle)}
                    >
                      Sign Up
                    </span>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
