import React from 'react';


 export default function item({name, quantity, category}) {
    return (
        <li className=" p-1.5 mb-4 shadow-sm bg-slate-900 lg:w-1/4 ">
          <div className="font-bold text-white text-xl">{name}</div>
          <div className="text-white "> buy {quantity} in {category}</div>
          
        </li>
      );
    }