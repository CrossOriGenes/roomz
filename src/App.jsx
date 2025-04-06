import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UpcomingMeets from "./pages/UpcomingMeets";
import PreviousMeets from "./pages/PreviousMeets";
import Recordings from "./pages/Recordings";
import Settings from "./pages/Settings";
import PersonalMeeting from "./pages/PersonalMeeting";
import AuthRouteProtector from "./components/AuthRouteProtector";
import { AuthContext } from "./context/AuthContext";

// export const AuthRouteProtector = ({ children }) => {
//   const authCtx = useContext(AuthContext);
//   const navigate = useNavigate();
//   async function checkToken(token) {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/auth/verifytoken",
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       const data = await response.json();
//       if (!data.valid) {
//         toast.warning(data.message);
//         authCtx.logout();
//         return navigate("../auth");
//       }
//       // console.log(data);
//     } catch (e) {}
//   }
//   useEffect(() => {
//     checkToken(authCtx.token);
//   }, []);
//   return children;
// };

const router = createBrowserRouter([
  {
    path: "",
    index: true,
    element: <Landing />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "home",
    id: "home",
    element: (
      <AuthRouteProtector>
        <Home />
      </AuthRouteProtector>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "upcoming-meetings", element: <UpcomingMeets /> },
      { path: "previous-meetings", element: <PreviousMeets /> },
      { path: "recordings", element: <Recordings /> },
      { path: "personal-meeting", element: <PersonalMeeting /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-out",
      delay: 500,
      once: true,
    });
  });

  return <RouterProvider router={router} />;
}

export default App;
