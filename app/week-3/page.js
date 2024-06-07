import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 pl-1 ">
      <h1 className="pl-2 pt-2 text-3xl font-bold text-white  ">Shopping List</h1>
      <ItemList />
    </main>
  );
}
