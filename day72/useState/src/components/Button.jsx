import React from 'react'

const Button = () => {
    const btnClick=() => {
        console.log("Button is Click !!");
        
    }
  return (
    <div>
        <button 
        onClick={function(){
            btnClick()
        }}
        className='active:scale-95 bg-emerald-600 text-black px-6 py-3 rounded font-bold m-2'>Click to Download</button>
    </div>
  )
}

export default Button