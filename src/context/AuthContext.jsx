import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

  async function checkToken() {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (!data.valid) {
        setToken(null);
        setUser({});
        localStorage.removeItem("token");
      } else {
        toast.success(`Hi <strong>${data.user.name}</strong>, Welcome!`);
        setUser(data.user);
      }
      console.log(data);
    } catch (e) {}
  }

  useEffect(() => {
    checkToken();
  }, []);

  function login(token) {
    setToken(token);
    localStorage.setItem("token", token);
    console.log("User logged In");
  }

  function logout() {
    setToken(null);
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
