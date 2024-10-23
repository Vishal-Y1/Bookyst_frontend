import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/AdminComponents/Sidebar";

const Admin = () => {
  return (
    <>
      <div className="navbaradmin h-20 bg-black fixed top-0 right-0 left-0"></div>
      <div className="flex pt-20">
        <Sidebar />
        <main className="bg-slate-200 h-screen flex-1">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Admin;
