import ItemList from "./item-list"; 

export default function Page(){
    return(
      <div className=" min-h-screen text-gray-50  bg-slate-950">
        <h2 className=" text-gray-50 text-3xl font-bold mt-0 m-2">Shopping List</h2>
        <ItemList />
      </div>
    );
  }