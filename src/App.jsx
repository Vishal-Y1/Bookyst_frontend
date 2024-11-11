import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex py-5 pt-20 justify-center min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
