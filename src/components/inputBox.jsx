import React from "react";

const ResponsiveSearchBar = ({ value, onChange, onSearch }) => {
  return (
    <label
      htmlFor="search-bar"
      className="mx-auto relative w-full max-w-md flex flex-col md:flex-row
                 items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl
                 focus-within:border-gray-300"
    >
      <input
        id="search-bar"
        placeholder="your keyword here"
        value={value}
        onChange={onChange}
        className="px-4 py-2 w-full rounded-md flex-1 outline-none bg-white text-gray-800"
      />
      <button
        onClick={onSearch}
        className="w-full md:w-auto px-6 py-2 bg-black border-black text-white active:scale-95 duration-100 border rounded-xl transition-all disabled:opacity-70"
      >
        <span className="text-sm font-semibold whitespace-nowrap mx-auto">
          Search
        </span>
      </button>
    </label>
  );
};

export default ResponsiveSearchBar;
