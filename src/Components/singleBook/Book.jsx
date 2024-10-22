import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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
    <div className="flex px-40 min-h-screen mt-20 py-10 gap-10 ">
      <div className="imageContainer w-[19rem] h-fit">
        <div className="w-[19rem] h-[30rem] bg-gray-200">
          <img src={book?.image} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="detailsContainer flex flex-col gap-5 flex-1">
        <div>
          <h1 className="text-3xl font-semibold capitalize">{book?.title}</h1>
          <h4 className="pt-4 font-medium text-lg">
            Paperback – 23 August 2024
          </h4>
          <p>
            by <Link className="text-blue-400 capitalize">{book?.author}</Link>{" "}
            (Author)
          </p>
          <span className="inline-flex gap-2   items-center">
            5.0 <FaStar className="text-orange-300" />
            <FaStar className="text-orange-300" />
            <FaStar className="text-orange-300" />
            <FaStar className="text-orange-300" />
            <Link>2 reviews</Link>
          </span>
        </div>
        <div className="bg-green-300 h-48">
          Offer section desing it in the future
        </div>
        <div className="bg-blue-300 h-48">delivery section</div>
        <div className="text-lg font-medium h-auto">
          {book?.desc} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestiae expedita fugiat ut! Dolorum explicabo asperiores natus unde
          doloribus enim molestiae!{" "}
        </div>
        <div className="pages_book bg-yellow-300 h-48"></div>
      </div>
      <div className="side-bar bg-gray-50 border-4 border-gray-300 w-[20rem] h-fit  py-2 pb-40">
        <div className="buttons flex gap-5 p-2">
          <button className="flex flex-col justify-center border-2 border-black bg-gray-300 flex-1 px-2 py-1 rounded-md text-xs font-bold">
            Hardcover <span className="text-base"> ${book?.price}</span>
          </button>
          <button className="flex flex-col justify-center border-2 border-black bg-gray-300 flex-1 px-2 py-1 rounded-md text-xs font-bold">
            Paperbook <span className="text-base"> ${book?.price}</span>
          </button>
        </div>
        <div className="px-3 flex flex-col gap-5">
          <div className="mrp">
            <span>-15%</span>
            <span>${book?.price}</span>
            <div className="text-xs ">
              M.R.P : <span className="line-through">$890</span>
            </div>
            <p>Inclusive of all taxes</p>
          </div>
          <div className="quotation">
            <p className="text-base font-medium">
              FREE delivery Friday, 25 October on orders dispatched by Amazon
              over ₹499. Order within 11 hrs 1 min. Details
            </p>
            <Link>icon Deliver to Vishal - Bakhra 200234</Link>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              {book?.stock ? (
                <span className="text-green-400">In stock</span>
              ) : (
                <span className="text-red-500">Out of stock</span>
              )}
            </h4>
          </div>
          <div></div>
          <div className="flex flex-col p-2 gap-4 font-semibold">
            <button className="bg-yellow-300 py-2 rounded-lg">
              Add to Cart
            </button>
            <button className="bg-yellow-300 py-2 rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
