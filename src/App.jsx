// import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

// import SignUp from "./Components/Auth/SignUp";
// import Login from "./Components/Auth/Login";
// import Search from "./Components/Search/Search";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* <Route path="/books">
//           <Route path=":id" element={<Book />} />
//           <Route path="add" element={<Addbook />} />
//         </Route> */}
//         <Route path="/search" element={<Search />} />
//         <Route path="/auth">
//           <Route index element={<Login />} />
//           <Route path="signup" element={<SignUp />} />
//         </Route>

//         <Route
//           path="*"
//           element={<h1 className="min-h-screen">Page not found</h1>}
//         />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from "react";
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
