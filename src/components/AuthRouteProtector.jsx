import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthRouteProtector = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  async function checkToken(token, controller) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/verifytoken",
        {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        }
      );
      const data = await response.json();
      if (!data.valid) {
        toast.warning(data.message);
        authCtx.logout();
        return navigate("../auth");
      }
      // console.log(data);
      // console.log(JSON.parse(authCtx.user));
    } catch (e) {}
  }

  useEffect(() => {
    const controller = new AbortController();
    checkToken(authCtx.token, controller);

    return () => {
      controller.abort();
    };
  }, []);

  return children;
};

export default AuthRouteProtector;
