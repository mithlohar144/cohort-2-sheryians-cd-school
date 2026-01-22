import React, { useContext } from "react";
import { useState } from "react";
import { UserDataContext } from "../context/UserContext";
const Navbar = (props) => {
  // const [newTheme, setnewTheme] = useState("");
  // console.log(props);

 const data =  useContext(UserDataContext)
 console.log(data);
 

  return (
    <div>
      {/* <button
        onClick={() => {
          props.ChangeTheme('dark');
        }}
      >
        Change Theme
      </button> */}
      <h1>This is Navbar {data}</h1>
<h1>{props.children}</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          props.ChangeTheme(newTheme);
          setnewTheme("");
          console.log(newTheme);
        }}
      >
        <input value={newTheme}
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
          type="text"
          placeholder="enter value"
        />
        <button>Submit</button>
      </form> */}
    </div>
  );
};

export default Navbar;
