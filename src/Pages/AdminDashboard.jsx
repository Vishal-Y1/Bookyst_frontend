import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/AdminComponents/Sidebar";

const Admin = () => {
  return (
    <>
      {/* <div className="navbaradmin h-20 bg-black fixed top-0 right-0 left-0"></div>
      <div className="flex pt-20">
        <Sidebar />
        <main className="bg-slate-200 h-screen flex-1">
          <Outlet />
        </main>
      </div> */}

      <div className="flex bg-slate-100">
        <nav className="inline-flex items-center  h-20 pl-20 w-full bg-purple-950 fixed">
          <input
            type="text"
            className="bg-slate-300 px-2 w-[30rem] h-10 rounded-sm ml-7"
            placeholder="Disabled"
            disabled
          />
        </nav>
        <div className="w-20 bg-blue-600 z-50">
          <Sidebar />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Admin;
