"use client";

import { useState } from "react";
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <label className=" text-gray-50 m-2" > Sort By:</label>
      <button
        className={`m-2 p-1 w-28 bg-orange-500 text-gray-50 ${
          sortBy === "name" 
        }`}
        onClick={() => handleSortChange("name")}
      >
        Name
      </button>
      <button
        className={`m-2 p-1 w-28 bg-orange-500 text-gray-50 ${
          sortBy === "category"
        }`}
        onClick={() => handleSortChange("category")}
      >
        Category
      </button>



      {sortedItems.map((item, index) => (
        <div className="p-2 m-4 bg-slate-900 max-w-sm" key={index}>
          <p className="text-xl font-bold">{item.name}</p>
          <p >Buy {item.quantity} in {item.category}</p>
        </div>
      ))}
    </div>
  );
}