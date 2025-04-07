import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   if (user && user.picture) {
  //     console.log("User picture: ", user.picture);
  //     console.log(11, user);
  //   }
  // }, [user]);

  return (
    <header className="header d-flex justify-content-end align-items-center">
      <div className="user-profile-icon">
        {user && user.picture ? (
          <img src={user.picture} alt="" />
        ) : (
          <img src="/images/dummy-user.png" alt="" />
        )}
      </div>
    </header>
  );
};

export default Header;
