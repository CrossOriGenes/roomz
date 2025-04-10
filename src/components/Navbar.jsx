import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import appLogo from "../assets/logo.svg";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { AnimatePresence } from "motion/react";
import Modal from "./Modal";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  function logoutHandler() {
    closeModalHandler();
    authCtx.logout();
    toast.success("Logged-out successfully.");
    navigate("..");
  }

  function closeModalHandler() {
    setOpen((open) => !open);
  }

  return (
    <>
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
              <button onClick={() => setOpen(true)}>
                <i className="fa-solid fa-right-from-bracket" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <AnimatePresence>
        {open && (
          <Modal title="Confirm?" onClose={closeModalHandler} type="confirm">
            <div className="modal-body">
              <i className="fa-solid fa-circle-question" />
              <p>Do you really wish to logout?😢</p>
            </div>
            <div className="modal-footer d-grid gap-2 d-md-flex justify-content-md-end mt-4">
              <button
                className="btn btn-primary btn-md fw-semibold"
                type="button"
                onClick={logoutHandler}
              >
                Yes
              </button>
              <button
                className="btn btn-dark btn-md fw-semibold"
                type="button"
                onClick={closeModalHandler}
              >
                No
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
