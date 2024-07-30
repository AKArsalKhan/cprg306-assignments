"use client";
import { useState } from "react";
import ItemList from "./item-list"; 
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedIngredient(cleanItemName);
  };

  return (
    <div className="text-gray-50 bg-slate-950 p-2 flex">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div>
          <h3 className="text-xl font-bold">Items</h3>
          <ItemList items={items} onSelectIngredient={handleItemSelect} />
        </div>
      </div>

      <div className="flex-1">
        {selectedIngredient && (
          <MealIdeas ingredient={selectedIngredient} />
        )}
      </div>
    </div>
  );
}
