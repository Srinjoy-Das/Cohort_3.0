import React from "react";

const NavBar = ({ setToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white rounded-lg">
      <div>
        <img
          className="h-12 w-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Logo"
        />
      </div>
      <div className="flex gap-6 font-semibold text-lg">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-500"
      >
        Go to Cart
      </button>
    </div>
  );
};

export default NavBar;
