import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../Components/Loader";
import AdminRoute from "./AdminRoutes";

//*Main Imports
const App = lazy(() => import("../App"));
const Home = lazy(() => import("../Pages/Home"));
const Search = lazy(() => import("../Components/Search/Search"));
const Book = lazy(() => import("../Components/singleBook/Book"));

//*Auth Imports
const Auth = lazy(() => import("../Pages/AuthPage"));
const Login = lazy(() => import("../Components/Auth/Login"));
const SignUp = lazy(() => import("../Components/Auth/SignUp"));

//* Admin Imports
const AdminDashboardPage = lazy(() => import("../Pages/AdminDashboard"));
const Dashboard = lazy(() => import("../Components/AdminComponents/Dashboard"));
const AddNewBook = lazy(() =>
  import("../Components/AdminComponents/AddNewBook")
);
const ManageBooks = lazy(() =>
  import("../Components/AdminComponents/ManageBooks")
);
const AdminLogin = lazy(() =>
  import("../Components/AdminComponents/AdminLogin")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
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
    element: (
      <Suspense fallback={<Loader />}>
        <Auth />
      </Suspense>
    ),
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
    element: (
      <Suspense fallback={<Loader title={"ADMIN"} />}>
        <AdminRoute>
          <AdminDashboardPage />
        </AdminRoute>
      </Suspense>
    ),
    children: [
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
