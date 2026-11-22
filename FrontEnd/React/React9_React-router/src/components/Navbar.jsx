import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center rounded-lg p-3 text-white">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt="Logo"
      />
      <div className="flex gap-6 items-center">
        <p className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          <NavLink to={"/"}>Home</NavLink>
        </p>
        <p className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          <NavLink to={"/about"}>About</NavLink>
        </p>
        <p className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          <NavLink to={"/contact"}>Contact</NavLink>
        </p>
        <p className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          <NavLink to={"/customer"}>Customer</NavLink>
        </p>
        <p className="cursor-pointer border-b-2 border-transparent hover:border-white hover:-translate-y-1 duration-150">
          <NavLink to={"/submissions"}>Submissions</NavLink>
        </p>
        <button className="bg-blue-500 cursor-pointer p-2 rounded-lg ml-6">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
