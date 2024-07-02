"use client";
import { useState } from "react";


export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = Math.random().toString(36).substr(2, 9);

        const newItem = {
            id,
            name,
            quantity,
            category,
        };
        onAddItem(newItem);


        setName("");
        setQuantity("1");
        setCategory("produce");

    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <div className="" >
                <div className=" p-2 m-4 bg-slate-900 text-black max-w-sm w-full rounded-sm h-44" >
                <form onSubmit={handleSubmit}>

                    <input className=" block w-full rounded-md text-black  mb-4 h-11"   type="text" placeholder="  Item name" required onChange={handleNameChange} value={name} />
                    <div className="flex justify-between">

                        <input type="number"  required min="1" max="99" onChange={handleQuantityChange} value={quantity}
                            className="  w-20 rounded-md text-black mb-4 h-11">
                        </input>

                        <select required onChange={handleCategoryChange} value={category}
                            className="  w-36 rounded-md text-black mb-4 h-11 ">

                            <option value="" disabled>Category</option>
                            <option value="produce" selected="">Produce</option>
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
                        className=" w-full py-2 px-4 bg-sky-600 hover:bg-sky-400 rounded-md text-white">+</button>

                </form>
                </div>

            </div>
        </div>
    );
}