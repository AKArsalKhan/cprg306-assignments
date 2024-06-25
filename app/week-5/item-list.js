"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`name: ${name}, quantity: ${quantity}, category: ${category}`);
        
        const newItem = {
            id: Date.now().toString(), //Generateunique id
            name: name,
            quantity: quantity,
            category: category,
        };
        
        items.push(newItem); //addnew item to the list
        console.log(newItem);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (increment) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSortChange = (sortValue) => {
        setSortBy(sortValue);
        setGroupByCategory(false);
    };

    const handleGroupByCategory = () => {
        setGroupByCategory(true);
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = sortedItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    const renderItems = () => {
        if (groupByCategory) {
            return Object.keys(groupedItems).sort().map(category => (
                <div key={category}>
                    <h3 className="capitalize text-2xl font-bold text-white">{category}</h3>
                    {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    ))}
                </div>
            ));
        } else {
            return sortedItems.map((item) => (
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ));
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center w-full p-4">
            <div className="p-3 m-4 bg-slate-700 text-black max-w-sm w-full rounded-lg">
                <form onSubmit={handleSubmit}>
                    <input 
                        className="block w-full rounded-md text-black mb-4 h-11" 
                        type="text" 
                        placeholder="Item name" 
                        required 
                        onChange={handleNameChange} 
                        value={name} 
                    />
                    <div className="flex items-center mb-4">
                     < div className="flex items-center border rounded-md w-full h-10 bg-white mr-19">
                    <input 
                            type="text"
                            value={quantity}
                            readOnly
                            className="w-7 text-center flex rounded-md text-black mr-16 " 
                        />

                        <button 
                            type="button" 
                            className="bg-blue-500 text-white rounded-md w-9 items-center mr-1 "
                            onClick={() => handleQuantityChange(-1)}
                        >
                            -
                        </button>
                        
                        <button 
                            type="button" 
                            className="bg-blue-500 text-white rounded-md w-9 "
                            onClick={() => handleQuantityChange(1)}
                        >
                            +
                        </button>
                        </div>
                        <select 
                            required 
                            onChange={handleCategoryChange} 
                            value={category}
                            className="ml-10 rounded-md text-black h-10"
                        >
                            <option value="" disabled>Category</option>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-400 rounded-md text-white"
                    >
                        +
                    </button>
                </form>
            </div>

        </div>
    );
}
