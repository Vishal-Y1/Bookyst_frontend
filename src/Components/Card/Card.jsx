import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`}>
      <div
        key={book._id}
        className="div space-y-3 text-black hover:scale-[1.03] transition-all ease-in-out duration-300 px-2"
      >
        <img
          src={book.image}
          alt=""
          draggable="false"
          className="h-[300px] w-[230px] object-cover rounded-md "
        />
        <div>
          <h3 className="font-semibold capitalize">{book.title}</h3>
          <p className="text-sm text-gray-700 capitalize">{book.author}</p>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>{book.ratings}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
