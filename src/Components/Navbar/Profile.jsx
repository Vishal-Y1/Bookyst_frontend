import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const Profile = ({ logout }) => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Account Settings
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          Order History
        </li>
        {auth.isAdmin && (
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/admin/dashboard">
              <button className="">Dashboard</button>
            </Link>
          </li>
        )}
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlist</li>
        <li
          onClick={logout}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Profile;
