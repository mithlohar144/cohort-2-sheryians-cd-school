import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-50 bottom-0 mt-40 px-5">
      <h1 className="text-green-200 font-extralight">Footer</h1>
      <div>
        <button
          className="border px-2 bg-emerald-400 text-white text-2xl2xl"
          onClick={() => {
            navigate("/product");
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Footer;
