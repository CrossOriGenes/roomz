import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  async function checkToken(controller) {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
        signal: controller.signal,
      });
      const data = await response.json();
      if (data.success || data.valid) {
        setUser(data.user);
        const element = (
          <p className="mb-0">
            Hi&nbsp;<strong>{data.user.username}</strong>, Welcome!
          </p>
        );
        toast.info(element);
      }
      // console.log(data);
    } catch (e) {}
  }

  useEffect(() => {
    const controller = new AbortController();
    checkToken(controller);

    return () => {
      controller.abort();
    };
  }, []);

  function login(token) {
    setToken(token);
    localStorage.setItem("token", token);
    console.log("User logged In");
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    console.log("User logged out");
  }

  const authValues = {
    login,
    logout,
    setUser,
    user,
    token,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
