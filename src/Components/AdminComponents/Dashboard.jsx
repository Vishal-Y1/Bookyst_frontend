import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllBooks } from "../../api/booksApi";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery({ queryKey: ["books"], queryFn: getAllBooks });

  const totalBooks = books?.length;

  return (
    <div className="">
      <div className="">
        <h1 className="text-3xl">Hello Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
