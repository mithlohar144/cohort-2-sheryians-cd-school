import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <div className="p-2 text-white">
        <h1 >DVSY</h1>
      </div>
      <div className="md:flex gap-2 hidden text-sm">
        <a className="  p-1 rounded bg-stone-400 text-xl text-white">DESIGNERS</a>
        <a className="  p-1 rounded bg-stone-400 text-xl text-white">COLLABS</a>
        <a className="  p-1 rounded bg-stone-400 text-xl text-white">EVENTS</a>
        <a className="  p-1 rounded bg-stone-400 text-xl text-white">BLOG</a>
        <a className="  p-1 rounded bg-stone-400 text-xl text-white">CARD</a>
         <button className="bg-red-400 p-1 text-xl rounded ">GET IN TOUCH</button>
      </div>
      {/* <div className="pl-4">
        <button className="bg-red-400 p-1 text-xl rounded ">GET IN TOUCH</button>
      </div> */}
    </div>
  );
};

export default Navbar;
