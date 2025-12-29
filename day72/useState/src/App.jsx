import React from "react";
import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Woman from "./components/Woman";
import Button from "./components/Button";

const App = () => {

  const user1 ={
    name:'sumit',
    age:20,
    gander:'male',
  }
   const user2 ={
    name:'kiri',
    age:19,
    gander:'female',
  }
   const user3 ={
    name:'miji',
    age:9,
    gander:'male',
  }
  return (
    <div>
      {/* <Navbar title="sumit" color='red' links={["Home", "about", "Account", "contact"]} />
      <Navbar title="Danish" color='blue'  links={["Home", "Service", "Courses", "contact"]} />
      <Navbar title="Elvissh" coor='green' links={["Home", "Products", "Men", "Woman"]} /> */}


      <div>
        {/* {user2.gander == 'male' ? <Men /> : <Woman />} */}

        {/* {user1.gander == 'male' ?  user1.age > 10 ? <Men /> : <Woman />: <Woman />} */}

        <Button />
      </div>
    </div>
  );
};

export default App;
