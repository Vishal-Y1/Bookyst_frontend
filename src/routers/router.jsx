import { createBrowserRouter, useParams } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Search from "../Components/Search/Search";
import Login from "../Components/Auth/Login";
import Book from "../Components/singleBook/Book";
import Auth from "../Pages/AuthPage";
import SignUp from "../Components/Auth/SignUp";

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
        path: "/admin",
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
    element: <div>Hello Admin</div>,
    children: [
      {
        path: "/admin/",
      },
    ],
  },
]);

export default router;
