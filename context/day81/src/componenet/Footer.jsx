import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {
  const data = useContext(UserDataContext)
 
  
  return (
    <div className="absolute bottom-0 w-screen h-10 bg-gray-800 text-white flex items-center justify-center">
      this is Footer {data}
    </div>
  );
};

export default Footer;
