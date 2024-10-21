import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getBooks } from "../../api/booksApi";
import Card from "../Card/Card";
import { FaBookOpen } from "react-icons/fa";

const Books = () => {
  const queryClient = useQueryClient();
  const [allBooks, setallBooks] = useState("");

  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery("books", getBooks);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center">Books</h1>
      {books?.map((b) => (
        <Card key={b._id} book={b} />
      ))}
      {/* <Card books={books} /> */}
      {/* <ul>
        {books?.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Books;
