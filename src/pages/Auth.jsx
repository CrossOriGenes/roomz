import { useState } from "react";
import SignupForm from "../components/SignupForm";
import SignInForm from "../components/SignInForm";

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
            <SignupForm />
            
            {/* sign-in section */}
            <SignInForm />

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
