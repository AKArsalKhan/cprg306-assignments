"use client";

import { useState } from "react";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const sortItems = (items) => {
    if (!Array.isArray(items)) {
      return [];
    }
    return [...items].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = sortItems(items);

  return (
    
      <div className="bg-slate-950 p-2 m-2 max--w-sm w-full">
        <label className=" text-gray-50 m-2" > Sort By:</label>
      <button
        className={`m-2 p-1 w-28 bg-orange-500 text-gray-50 ${
          sortBy === "name"  ? "bg-gray-700" : ""
        }`}
        onClick={() => handleSortChange("name")}
      >
        Name
      </button>
      <button
        className={`m-2 p-1 w-28 bg-orange-500 text-gray-50 ${
          sortBy === "category" ? "bg-gray-700" : ""

        }`}
        onClick={() => handleSortChange("category")}
      >
        Category
      </button>



      {sortedItems.map((item) => (
        <div className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
          <p className="text-xl font-bold">{item.name}</p>
          <p >Buy {item.quantity} in {item.category}</p>
        </div>
      ))}
    </div>
  );
}