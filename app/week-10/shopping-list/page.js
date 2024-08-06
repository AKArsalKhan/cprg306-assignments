"use client";
import { useState,useEffect } from "react";
import ItemList from "./item-list"; 
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems,addItem } from "../_services/shopping-list-service";


export default function Page({ user }) {  // Ensure the user prop is passed to this component
  const [items, setItems] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  // Function to load items from Firestore
  const loadItems = async () => {
    if (user && user.uid) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };

  // useEffect hook to call loadItems when the component is mounted
  useEffect(() => {
    loadItems();
  }, [user]); // Dependency array includes user

  // Function to handle adding a new item
  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
    }
  };

  // Function to handle selecting an ingredient
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
