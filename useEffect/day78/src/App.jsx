import React, { use, useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  // const [title, setTitle] = useState("");
  // const [counter, setCounter] = useState(0);
  // useEffect(function () {
  //   console.log("useeffect is running !!!");
  // }, [counter]);
  

  // const [allPokemon, setAllPokemon] = useState([]);
  // const getData = async () => {
  //   const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  //   console.log(response.data.results);
  //   setAllPokemon(response.data.results)
  // }

  // useEffect(async function () {
  //   const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  //   console.log(response.data.results);
    

  // })

  const [userName, setUserName] = useState('')
  const [num, setNum] = useState(0)

  const getData = async () =>{
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    console.log(response.data.results[0].name);
    
    setUserName(response.data.results[num].name)
  }
  useEffect(function (){
    getData()
  }, [num])

  return (
    <div>
   {userName}
   <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>change pokemon</button>


      {/* <div onClick={()=>{
        getData()
      }}>click</div>
      {allPokemon.map(function (elm, idx){
        return <div key={idx}>{elm.name}</div>
      })} */}


      {/* <input
        type="text"
        placeholder="enter name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button> */}
    </div>
  );
};

export default App;
