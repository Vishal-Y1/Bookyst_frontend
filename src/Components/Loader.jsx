import React from "react";

const Loader = ({ title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-10">
      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-gray-900 font-bold">
          BOOKYST {title}
        </h1>
      </div>
    </div>
  );
};

export default Loader;
