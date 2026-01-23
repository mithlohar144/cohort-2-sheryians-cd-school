import React, { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Footer = () => {
  const [UserName, setUserName] = useContext(UserDataContext)


  return (
    <div className="absolute bottom-0 w-screen h-10 bg-gray-800 text-white flex items-center justify-center">
      <h1>this is Footer {UserName}</h1>
      <button className="px-3 border-1 "
        onClick={() => {
          if (UserName === 'mithliesh') {
            setUserName('sumit')
          } else {
            setUserName('mithilesh')
          }
        }}
      >Change user</button>
    </div>
  );
};

export default Footer;
