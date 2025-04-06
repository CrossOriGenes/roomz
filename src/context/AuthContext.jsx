import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState({});

  async function checkToken() {
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.sucess) {
        const element = (
          <div>
            Hi&nbsp;<strong>{data.user.username}</strong>, Welcome!
          </div>
        );
        toast.info(element);
        console.log(`Welcome ${data.user.username}`);
        setUser(data.user);
      } 
      if (!data.valid) {
        setUser({});
        setToken(null);
      } 
      // console.log(data);
    } catch (e) {}
  }

  useEffect(() => {
    checkToken();
    // return () => 
  }, []);

  function login(token) {
    setToken(token);
    localStorage.setItem("token", token);
    console.log("User logged In");
  }

  function logout() {
    setToken(null);
    setUser({});
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
