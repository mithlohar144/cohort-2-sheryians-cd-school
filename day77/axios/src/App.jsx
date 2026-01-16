import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [allUsers, setallUsers] = useState([]);
  async function getData() {
    

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setallUsers(response.data);
    console.log(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>

      {allUsers.map(function(elem,idx){
        return <h1 key={idx}>{elem.name} {idx}</h1>
      })}
    </div>
  );
};

export default App;
