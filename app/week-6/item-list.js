"use client";

import { useState } from "react";

export default function ItemList({ items }) {
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

  const groupItemsByCategory = (items) => {
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    return Object.keys(grouped)
      .sort()
      .map(category => ({
        category,
        items: grouped[category].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  };

  const sortedItems = sortItems(items);
  const groupedItems = groupItemsByCategory(items);

  return (
    <div className="bg-slate-950 p-2 m-2 max-w-sm w-full">
      <label className="text-gray-50 m-2">Sort By:</label>
      <button
        className={`m-2 p-1 w-20 bg-orange-500 text-gray-50 ${sortBy === "name" ? "bg-gray-700" : ""}`}
        onClick={() => handleSortChange("name")}
      >
        Name
      </button>
      <button
        className={`m-2 p-1 w-20 bg-orange-500 text-gray-50 ${sortBy === "category" ? "bg-gray-700" : ""}`}
        onClick={() => handleSortChange("category")}
      >
        Category
      </button>
      <button
        className={`m-2 p-1 w-30 bg-orange-500 text-gray-50 ${sortBy === "groupByCategory" ? "bg-gray-700" : ""}`}
        onClick={() => handleSortChange("groupByCategory")}
      >
        Group by Category
      </button>

      {sortBy === "groupByCategory" ? (
        groupedItems.map((group, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold capitalize text-orange-500">{group.category}</h2>
            {group.items.map((item, idx) => (
              <div className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
                <p className="text-xl font-bold">{item.name}</p>
                <p>Buy {item.quantity} in {item.category}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        sortedItems.map((item) => (
          <div className="p-2 m-4 bg-slate-900 max-w-sm" key={item.id}>
            <p className="text-xl font-bold">{item.name}</p>
            <p>Buy {item.quantity} in {item.category}</p>
          </div>
        ))
      )}
    </div>
  );
}
