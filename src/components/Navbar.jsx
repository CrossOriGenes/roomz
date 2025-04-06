import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import appLogo from "../assets/logo.svg";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  function logoutHandler() {
    authCtx.logout();
    navigate("../auth");
    toast.success("Logged-out successfully.");
  }

  return (
    <aside className="aside-panel">
      <div className="container app-logo">
        <img src={appLogo} alt="app-logo" />
      </div>
      <nav className="nav d-flex flex-column justify-content-between mt-4">
        <div className="upper-menu d-flex flex-column">
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="upcoming-meetings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-calendar-days" />
            <span>Upcoming</span>
          </NavLink>
          <NavLink
            to="previous-meetings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-calendar-days" />
            <span>Previous</span>
          </NavLink>
          <NavLink
            to="recordings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-video" />
            <span>Recordings</span>
          </NavLink>
          <NavLink
            to="personal-meeting"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="fa-solid fa-plus" />
            <span>Personal Room</span>
          </NavLink>
        </div>
        <ul className="lower-menu">
          <li>
            <NavLink to="settings">
              <i className="fa-solid fa-gear" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <button onClick={logoutHandler}>
              <i className="fa-solid fa-right-from-bracket" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
