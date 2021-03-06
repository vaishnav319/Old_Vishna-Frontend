import React from "react";

const Search = () => (
  <div class="flex items-center justify-end sm:justify-center sm:mt-5 mr-5">
    <div class="flex border-2 border-gray-200 rounded">
      <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
      <button class="px-4 text-white bg-gray-600 border-l ">Search</button>
    </div>
  </div>
);

export default Search;
