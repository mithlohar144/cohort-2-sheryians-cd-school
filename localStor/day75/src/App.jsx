import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [Username, setUsername] = useState('')
  const [userRole, setuserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [description, setdescription] = useState('')


  const localData = JSON.parse(localStorage.getItem('all_users')) || []
  console.log(localData);
  
  const [allUsers, setallUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault();

    const OldUsers  = [...allUsers];
    OldUsers.push({Username, userRole, imageURL, description})
    setallUsers(OldUsers)
    localStorage.setItem('all_users', JSON.stringify(OldUsers))
    console.log(Username, userRole, imageURL, description);
    console.log(OldUsers);
    

    setUsername('')
    setuserRole('')
    setimageURL('')
    setdescription('')
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];
    const conf = confirm("Are you sure to delete this user?");
    if(conf){
      copyUsers.splice(idx, 1);
    }else{
      alert("User not deleted");
    }
    setallUsers(copyUsers);
    localStorage.setItem('all_users', JSON.stringify(copyUsers))
  }

  return (
    <div className="h-screen bg-black text-white">
      <form onSubmit={(e) => {
            submitHandler(e);
        }}
         className="flex flex-wrap justify-center p-2">
        <input
        value={Username}
        onChange={(e)=>{
          setUsername(e.target.value)
          
        }}
          className="border-2 px-5 py-2  text-xl  rounded m-2 w-[48%]"
          type="text"
          placeholder="enter your name"
        />
        <input
        value={imageURL}
        onChange={(e)=>{
          setimageURL(e.target.value)
          
        }}
          className="border-2 px-5 py-2  text-xl rounded m-2 w-[48%]"
          type="text"
          placeholder="img Url"
        />
        <input
        value={userRole}
        onChange={(e)=>{
          setuserRole(e.target.value)
          
        }}
          className="border-2 px-5 py-2 text-xl  rounded m-2 w-[48%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
        value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
          
        }}
          className="border-2 px-5 py-2  text-xl rounded m-2 w-[48%]"
          type="text"
          placeholder="enter descripation"
        />
        <button
           
          className="border-2 px-5 py-2 bg-emerald-700 text-xl active:scale-97 cursor-pointer rounded m-2 w-[90%]"
        >
          Create user
        </button>
      </form>

      <div className="px-2 py-10 gap-4 flex flex-wrap ">
       {allUsers.map(function(elm, idx){
        return  <div key={idx} className='w-[23vw] lg:w-[23vw] md:w-[30vw] sm:w-[45vw] flex items-center flex-col rounded-xl py-8 text-center bg-white text-black'>
        <img  className='h-24 w-24 rounded-full object-center object-cover' src={elm.imageURL} alt="" />
        <h1 className='text-xl mt-2 font-semibold'>{elm.Username}</h1>
        <h5 className=' text-blue-500 text-lg font-semibold my-3'>{elm.userRole}</h5>
        <p className='text-sm font-medium leading-tight'>{elm.description}</p>
        <button onClick={() =>{
        deleteHandler(idx)
        }} className='px-4 py-2 rounded text-xs active:scale-95 cursor-pointer font-semibold bg-red-700 mt-5'>Remove</button>
    </div>
       })}
      </div>
    </div>
  );
};

export default App;
