import React from "react";

const ResponsiveSearchBar = ({ value, onChange, onSearch }) => {
  return (
    <label
    htmlFor="search-bar"
    className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row 
               items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl 
               focus-within:border-gray-300"
  >
      <input
        id="search-bar"
        placeholder="your keyword here"
        value={value}
        onChange={onChange}
        className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-gray-800"
      />
      <button
        onClick={onSearch}
        className="w-full md:w-auto px-6 py-3 bg-black border-black text-white active:scale-95 duration-100 border rounded-xl transition-all disabled:opacity-70"
      >
        <div className="relative flex items-center justify-center">
          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
            Search
          </span>
        </div>
      </button>
    </label>
  );
};

export default ResponsiveSearchBar;
