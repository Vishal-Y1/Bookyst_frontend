import React from "react";
import Card from "../Components/Card/Card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllBooks } from "../api/booksApi";

const Home = () => {
  const queryClient = useQueryClient();

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
      className="skeleton-card bg-gray space-y-3 w-[250px] h-[376px] px-2"
    >
      <div className="skeleton-image animate-pulse bg-silver-gradient w-[234px] h-[300px] rounded-md"></div>
      <div>
        <div className="skeleton-title animate-pulse bg-silver-gradient h-4 mb-2 rounded"></div>
        <div className="skeleton-content animate-pulse bg-silver-gradient w-1/2 h-3 mb-2 rounded"></div>
        <div className="skeleton-content animate-pulse bg-silver-gradient w-1/4 h-3 rounded"></div>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-4 gap-6 mt-10">
      {isLoading ? skeletons : books?.map((b) => <Card key={b._id} book={b} />)}
      {isError && (
        <p className="text-red-500 text-xl">Error: {error.message}</p>
      )}
    </div>
  );
};

export default Home;
