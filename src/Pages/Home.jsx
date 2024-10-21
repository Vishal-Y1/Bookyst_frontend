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

  return (
    // <div className=" flex min-h-screen justify-center py-5">
    //   <div className="grid grid-cols-4 mt-10  gap-6">
    //     {books?.map((b) => (
    //       <Card key={b._id} book={b} />
    //     ))}
    //   </div>
    // </div>

    <div className="grid grid-cols-4 mt-10  gap-6">
      {books?.map((b) => (
        <Card key={b._id} book={b} />
      ))}
    </div>
  );
};

export default Home;
