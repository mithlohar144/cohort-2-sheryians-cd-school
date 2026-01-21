import React, { useState } from "react";
import axios from "axios";
import Navbar from "./componenet/Navbar";
import Allsection from "./componenet/Allsection";
import Footer from "./componenet/Footer";
import Courses from "./componenet/Courses";
const App = () => {
  // const getData = async () => {
  //   const response = await axios.get("http://localhost:8000/");
  //   console.log(response);
  // };



  const [Theme, setTheme] = useState('light');

  const ChangeTheme = (newTheme) => {
    console.log(newTheme);
    
    setTheme(newTheme);
  };
  return (
    <div>
      {/* <button onClick={getData}>Click </button> */}
      <h1>Theme is {Theme}</h1>
      <Navbar  ChangeTheme={ChangeTheme} />

      <Courses />
      <Allsection />
      <Footer />
    </div>
  );
};

export default App;
