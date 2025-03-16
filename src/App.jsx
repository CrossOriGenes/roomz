import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
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
    element: <Home />,
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
