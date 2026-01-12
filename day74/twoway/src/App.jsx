import React, { use, useState } from "react";

const App = () => {
 

  const [username, setUsername] = useState("");

  const [allUser, setAllUser] = useState([]);

  const [email, setemail] = useState('')

   const submitHandler = (e) => {
    e.preventDefault();

    console.log(username, email);
    
    const newAllUsers = [...allUser];
    newAllUsers.push({ username, email });
    setAllUser(newAllUsers);

    console.log(newAllUsers);
    
    setUsername("");
    setemail('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <button>submit</button>
      </form>

      {
        allUser.map((elem)=>{
          return <h1>{elem.username}, {elem.email}</h1>
        })
      }


    
    </div>
  );
};

export default App;
