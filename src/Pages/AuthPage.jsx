import React from "react";
import Login from "../Components/Auth/Login";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AuthPage = () => {
  return (
    <>
      <Navbar />
      <div className="m-h-screen w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
