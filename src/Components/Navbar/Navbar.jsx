import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { search } from "../../api/booksApi";
import useDebounceSearch from "../../hooks/useDebounce";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const queryClient = useQueryClient();
  const inputRef = useRef(null); // Create a ref to the input element
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounceSearch(q, 200);
  const {
    isLoading,
    isError,
    error,
    data: books,
  } = useQuery({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return search(debouncedSearchTerm);
      }
    },
  });

  //showing and hiding suggestion div
  const isDataAvailable = books && books.length > 0;
  const showSuggestions = isFocused && isDataAvailable;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search results page
    if (debouncedSearchTerm) {
      navigate(
        `/search?q=${encodeURIComponent(debouncedSearchTerm).replace(
          /%20/g,
          "+"
        )}`
      );
    }
    setIsFocused(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e); // Call handleSubmit to perform the navigation
      e.target.blur(); // Remove focus from the input
    }
  };

  const handleGlobalKeyDown = (e) => {
    if (e.key === "/") {
      e.preventDefault(); // Prevent default action for '/'
      inputRef.current.focus(); // Focus the input field
      setIsFocused(true); // Update focus state
    }
  };

  useEffect(() => {
    // Attach global keydown event listener
    document.addEventListener("keydown", handleGlobalKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-between px-[15rem] items-center shadow-md h-[79px] fixed left-0 right-0 top-0 z-50 bg-slate-50 p-4  ">
      <Link to="/">
        <h1 className="font-bold text-xl">Vishal Yadav - Booksyst</h1>
      </Link>
      <div className="relative font-semibold">
        <form
          onSubmit={handleSubmit}
          className="border pr-2 border-slate-500  rounded-full w-fit gap-3 inline-flex items-center "
        >
          {isFocused && <IoSearchOutline className="size-5 left-2 absolute" />}
          <input
            ref={inputRef} // Attach ref to the input field
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            type="text"
            placeholder="Search for Book or Author Name"
            className={`py-2 px-4 h-11 rounded-l-full focus:ring-2 focus:ring-purple-500  ${
              isFocused && "pl-10"
            } focus:outline-none outline-none w-[30rem]`}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button type="submit">
            <IoSearchOutline className="size-7" />
          </button>
        </form>
        {showSuggestions && (
          <div
            className={`absolute flex flex-col w-[30em] ${
              isDataAvailable && "bg-white"
            } text-black py-3 rounded-xl z-50 `}
          >
            {/* {books?.map((book) => (
              <li
                onMouseDown={() => handleClickTest(book)}
                key={book._id}
                className="inline-flex items-center gap-x-3 py-2 px-4 bg-red-500 cursor-pointer hover:bg-slate-100"
              >
                <IoSearchOutline className="size-5 " />
                <p>{book.title}</p>
              </li>
            ))} */}

            {books?.map((book) => {
              const lowerCaseQuery = q?.toLowerCase().trim() || "";

              const titleMatch = book.title?.includes(lowerCaseQuery);
              const authorMatch = book.author?.includes(lowerCaseQuery);

              // Display only one match, giving priority to the name if both match
              if (titleMatch) {
                return (
                  <li
                    // onMouseDown={() => handleClickTest(book)}
                    onMouseDown={() => {
                      setQ(book.title); // Update q with the username on mouse down
                      navigate(
                        `/search?q=${encodeURIComponent(book.title).replace(
                          /%20/g,
                          "+"
                        )}`
                      ); // Change the query params in the URL
                    }}
                    key={book._id}
                    className="inline-flex items-center gap-x-3 py-3 px-4 cursor-pointer hover:bg-slate-100"
                  >
                    <IoSearchOutline className="size-5 " />
                    {book.title}
                  </li>
                );
              } else if (authorMatch) {
                return (
                  <li
                    // onMouseDown={() => handleClickTest(book)}
                    onMouseDown={() => {
                      setQ(book.author); // Update q with the username on mouse down
                      navigate(
                        `/search?q=${encodeURIComponent(book.author).replace(
                          /%20/g,
                          "+"
                        )}`
                      ); // Change the query params in the URL
                    }}
                    className="inline-flex items-center gap-x-3 py-3 px-4 cursor-pointer hover:bg-slate-100"
                    key={book._id}
                  >
                    <IoSearchOutline className="size-5 " />
                    {book.author}
                  </li>
                );
              }

              // If there's no match, return null
              return null;
            })}
          </div>
        )}
      </div>
      <Link to="/auth/signin">
        <button className="border-2 bg-white border-gray-300 rounded-lg  px-5 py-2 text-sm">
          Sign in
        </button>
      </Link>
      <Link to={"/admin"}>
        <button className="border-2 bg-white border-gray-300 rounded-lg  px-5 py-2 text-sm">
          Admin
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
