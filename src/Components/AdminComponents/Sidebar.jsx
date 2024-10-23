import React from "react";
import { HiViewGridAdd } from "react-icons/hi";
import { MdManageHistory, MdSpaceDashboard } from "react-icons/md";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen fixed top-0 right-0 left-0 bg-red-500 w-20 flex flex-col gap-10 items-center">
      <div className="size-20 bg-purple-500"></div>
      <Link to={"/admin/dashboard"}>
        <MdSpaceDashboard className="size-9" />
      </Link>
      <Link to={"/admin/add-new"}>
        <HiViewGridAdd className="size-9" />
      </Link>
      <Link to={"/admin/manage-books"}>
        <MdManageHistory className="size-9" />
      </Link>
    </div>
  );
};

export default Sidebar;
