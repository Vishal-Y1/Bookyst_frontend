import { createBrowserRouter, useParams } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Search from "../Components/Search/Search";
import Login from "../Components/Auth/Login";
import Book from "../Components/singleBook/Book";
import Auth from "../Pages/AuthPage";
import SignUp from "../Components/Auth/SignUp";
import AdminDashboardPage from "../Pages/AdminDashboard";
import Dashboard from "../Components/AdminComponents/Dashboard";
import Admin from "../Components/AdminComponents/AdminLogin";
// import AddNewBook from "../Components/AdminComponents/AddNewBook";
import NewBook from "../Components/AddBook/NewBook";
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
        path: "/add",
        element: <NewBook />,
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
        path: "/admin/manage-books",
        element: <ManageBooks />,
      },
    ],
  },
]);

export default router;
