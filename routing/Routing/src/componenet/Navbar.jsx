import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-2 py-4">
      <h1 className="text-2xl font-extralight">Mithilesh </h1>
      <div className="flex gap-8">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
