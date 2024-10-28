import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`} key={book._id} className="w-[250px]">
      <div className="space-y-3 text-black hover:scale-[1.03] transition-all ease-in-out duration-300 px-2">
        <img
          src={book.image}
          alt={book.title}
          className="h-[300px] w-[250px] object-fill rounded-md bg-gray-200"
        />
        <div>
          <h3 className="font-semibold capitalize">{book.title}</h3>
          <p className="text-sm text-gray-700 capitalize">{book.author}</p>
          <div className="flex items-center">
            <span className="text-sm">{book.rating || "N/A"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
