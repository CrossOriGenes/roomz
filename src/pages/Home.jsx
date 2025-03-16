import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default Home;
