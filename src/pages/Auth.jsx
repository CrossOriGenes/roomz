import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SignupForm from "../components/SignupForm";
import SignInForm from "../components/SignInForm";

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [errors, setErrors] = useState();
  const [errors2, setErrors2] = useState();

  async function handleSignupForm(userData) {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      setLoading(false);
      if (data.success) {
        toast.success(data.message);
        setToggle((toggle) => !toggle);
        setErrors(null);
      } else {
        console.log(data.errors[0]);
        setErrors(data.errors[0]);
      }
    } catch (e) {}
  }

  async function handleSigninForm(loginData) {
    try {
      setLoading2(true);
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      setLoading2(false);
      if (data.success) {
        authCtx.login(data.token);
        navigate("../home");
        toast.success(data.message);
        setErrors2(null);
      } else {
        console.log(data.errors[0]);
        setErrors2(data.errors[0]);
      }
    } catch (e) {}
  }

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
            <SignupForm
              onSubmit={handleSignupForm}
              isLoading={loading}
              errors={errors}
            />

            {/* sign-in section */}
            <SignInForm
              onSubmit={handleSigninForm}
              isLoading={loading2}
              signInErrors={errors2}
            />

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
