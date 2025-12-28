import React from "react";

const Card = (props) => {
  console.log(props);

  const abc = [10,20,30]
  return (
    <div className="bg-white border-2 border-red-500 h-40 w-40 flex justify-center items-center rounded m-2 px-5 py-3">
      {/* <h1 className="text-2xl font-semibold">{props.user}, {props.age}</h1> */}

      <h1 className="text-2xl text-black font-semibold">{props.user}</h1>
    </div>
  );
};

export default Card;
