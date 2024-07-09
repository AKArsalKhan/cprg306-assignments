"use client";
import React from 'react';

const Item = ({ id, name, quantity, category, onSelect }) => {
  return (
    <div
      className="p-2 m-4 bg-slate-900 max-w-sm transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-slate-800 cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <p className="text-xl font-bold">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </div>
  );
};

export default Item;
