import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { search } from "../../api/booksApi";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";

const Search = () => {
  const queryClient = useQueryClient();

  const query = new URLSearchParams(useLocation().search).get("q");

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => {
      if (query) {
        return search(query);
      }
    },
  });

  return (
    // <div className="flex min-h-screen justify-center  py-5">
    //   <div className="grid grid-cols-4 mt-10  gap-6">
    //     {books?.map((book) => (
    //       <Card key={book._id} book={book} />
    //     ))}
    //   </div>
    // </div>

    <div className="grid grid-cols-4 mt-10  gap-6">
      {books?.map((book) => (
        <Card key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Search;
