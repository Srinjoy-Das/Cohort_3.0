import React, { useCallback, useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {

  let {setIsCartOpen} = useContext(MyStore);

  return (
    <div className="bg-black p-6 flex text-white rounded-lg justify-between items-center">
      <img
        className="rounded-full w-12 h-12 object-cover"
        src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Logo"
      />
      <div className="flex gap-6 font-semibold text-lg">

        <p onClick={() => setIsCartOpen(false)} className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          Cart
        </p>
      
      </div>
      <button className="bg-gray-700 p-2 rounded-lg cursor-pointer hover:bg-gray-500 duration-200 hover:-translate-y-1">
        Create
      </button>
    </div>
  );
};

export default Navbar;
