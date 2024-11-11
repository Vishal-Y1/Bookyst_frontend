import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const AdminRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return auth?.isAdmin ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};
export default AdminRoute;
