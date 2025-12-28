import React from "react";
import Card from "./comppnents/Card";
import Button from "./comppnents/Button";

const App = () => {

  const users = ['sumit', 'mithilesh', 'mi','k']
  return (
    <div className="p-3 h-screen text-white bg-black">
      {/* {Card("sumit",17)}
      {Card("mithilesh",20)}
       {Card("Mahi",17)} */}
      {/* <Card user="Mith" />
      <Card user="sumit" age="17" />
      <Card user="Mithilesh" age="27" />
      <Button text="Buy now" />
      <Button text="Explore Courese" />
      <Button text="Khelega Free Fire" /> */}
      {/* <Card /> */}
        {users.map(function(elm){
          return <Card user={elm}/>
        })}

    </div>
  );
};

export default App;
