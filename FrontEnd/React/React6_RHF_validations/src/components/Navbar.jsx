import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex justify-between bg-black text-white rounded-lg items-center mb-2">
      <div>
        <img
          className="h-12 w-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Logo"
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Careers</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-500"
      >
        Create
      </button>
    </div>
  );
};

export default Navbar;
