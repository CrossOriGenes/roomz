import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="header d-flex justify-content-end align-items-center">
      <div className="user-profile-icon">
        {user.profile_pic ? (
          <img src={user.profile_pic} alt="" />
        ) : (
          <img src="/images/dummy-user.png" alt="" />
        )}
      </div>
    </header>
  );
};

export default Header;
