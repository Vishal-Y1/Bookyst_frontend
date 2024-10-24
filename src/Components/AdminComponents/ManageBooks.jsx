import React from "react";

import { FaPlus, FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Table from "../AdminComponents/Table";

const ManageBooks = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className=" w-full text-black flex justify-between items-center px-10 py-10">
        <div className="font-semibold">
          <h1 className="text-4xl">Dashboard</h1>
          <p>Bookstore inventory</p>
        </div>
        <div className="inline-flex items-center gap-6">
          <button className="w-[10rem] py-2 justify-center bg-yellow-300 inline-flex items-center gap-2 rounded-md">
            <FaPen />
            <span>Manage Books</span>
          </button>
          <Link
            to={"/admin/add-new"}
            className="py-2 w-[10rem] justify-center bg-yellow-300 inline-flex items-center gap-2 rounded-md"
          >
            <FaPlus />
            <span>Add Books</span>
          </Link>
        </div>
      </div>
      <div className="bg-slate-100 ">
        <div className="text-black flex justify-between border-b-2 w-full">
          <h3>All Books</h3>
          <button>View all</button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default ManageBooks;
