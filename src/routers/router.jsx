import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Search from "../Components/Search/Search";
import Login from "../Components/Auth/Login";
import Book from "../Components/singleBook/Book";
import Auth from "../Pages/AuthPage";
import SignUp from "../Components/Auth/SignUp";
import AdminDashboardPage from "../Pages/AdminDashboard";
import Dashboard from "../Components/AdminComponents/Dashboard";
import AddNewBook from "../Components/AdminComponents/AddNewBook";
import ManageBooks from "../Components/AdminComponents/ManageBooks";
import AdminLogin from "../Components/AdminComponents/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/books/:id",
        element: <Book />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/signin",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboardPage />,
    children: [
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/add-new",
        element: <AddNewBook />,
      },
      {
        path: "/admin/inventory",
        element: <ManageBooks />,
      },
    ],
  },
]);

export default router;
