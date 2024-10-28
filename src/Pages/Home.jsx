import React from "react";
import Card from "../Components/Card/Card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllBooks } from "../api/booksApi";

const Home = () => {
  const queryClient = useQueryClient();

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: books,
  // } = useQuery("books", getAllBooks, {
  //   select: (books) => books.sort((a, b) => b._id - a._id),
  // });

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery({ queryKey: ["books"], queryFn: getAllBooks });

  // Generate placeholder skeletons while loading
  const skeletons = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="skeleton-card bg-gray-200 p-4 rounded-lg w-[234px] h-[300px]"
    >
      <div className="skeleton-title bg-gray-300 h-6 mb-4 rounded"></div>
      <div className="skeleton-content bg-gray-300 h-4 mb-2 rounded"></div>
      <div className="skeleton-content bg-gray-300 h-4 rounded"></div>
    </div>
  ));

  return (
    // <div className="grid grid-cols-4 gap-6 mt-10">
    //   {isLoading && <p className="text-red-500 text-3xl">Loading...</p>}
    //   {books?.map((b) => (
    //     <Card key={b._id} book={b} />
    //   ))}
    // </div>

    <div className="grid grid-cols-4 gap-6 mt-10">
      {isLoading ? skeletons : books?.map((b) => <Card key={b._id} book={b} />)}
      {isError && (
        <p className="text-red-500 text-xl">Error: {error.message}</p>
      )}
    </div>
  );
};

export default Home;
