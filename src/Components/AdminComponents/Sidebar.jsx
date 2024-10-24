import React from "react";
import { MdSpaceDashboard, MdManageHistory } from "react-icons/md";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../../public/vite.svg";

const Sidbar = () => {
  return (
    <div className="fixed w-20 pt-5 flex flex-col items-center h-full gap-14">
      <Link to={"/admin/dashboard"}>
        <img src={Logo} alt="" className="size-10" />
      </Link>
      <Link to={"/admin/dashboard"} className="bg-slate-200 p-3 rounded-lg">
        <IoStatsChart className="size-9 text-slate-900" />
      </Link>
      <Link to={"/admin/add-new"}>
        <BiSolidBookAdd className="size-9 text-gray-400" />
      </Link>
      <Link to={"/admin/inventory"}>
        <MdManageHistory className="size-9 text-gray-400" />
      </Link>
    </div>
  );
};

export default Sidbar;
