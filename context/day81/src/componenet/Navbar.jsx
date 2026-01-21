import React from "react";
import { useState } from "react";
const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState("");
  console.log(props);

  return (
    <div>
      {/* <button
        onClick={() => {
          props.ChangeTheme('dark');
        }}
      >
        Change Theme
      </button> */}

      <form
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
      </form>
    </div>
  );
};

export default Navbar;
