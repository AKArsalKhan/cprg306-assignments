"use client";
import{useState} from "react";
export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`name: ${name}, quantity: ${quantity}, category: ${category}`);



        const item = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(item);



    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    return (
      <div>
        <div className="min-h-screen bg-black flex justify-center w-full  p-4">
        <div className=" p-3 m-4 bg-slate-700 text-black max-w-sm w-full rounded-lg h-44" >
        <form onSubmit={handleSubmit}>

        <input className=" block w-full rounded-md text-black  mb-4 h-11"   type="text" placeholder="  Item name" required onChange={handleNameChange} value={name} />
        <div className="flex justify-between ">

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
  