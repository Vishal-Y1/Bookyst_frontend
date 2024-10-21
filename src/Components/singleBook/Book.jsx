import React from "react";
import { useLocation } from "react-router-dom";
import { getBook } from "../../api/booksApi";
import { useQuery } from "@tanstack/react-query";

const Book = () => {
  const path = useLocation().pathname.split("/")[2];

  const {
    isLoading,
    isError,
    error,
    data: book,
  } = useQuery({
    queryKey: ["book", path],
    queryFn: () => {
      if (path) {
        return getBook(path);
      }
    },
  });

  return (
    <div>
      <img src={book?.image} alt="" className="w-[15rem] h-[20rem] " />
      <h1 className="text-3xl">{book?.title}</h1>
    </div>
  );
};

export default Book;
