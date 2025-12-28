import React from 'react'

const Button = (props) => {
  return (
    <div className='flex gap-3 mt-2'>
                <div className='h-7 w-7 text-center justify-center border rounded-2xl bg-[#2b2b2c] rotate-220'> <i class="fa-solid fa-arrow-down"></i></div>
                <button>{props.text}</button>
    </div>
  )
}

export default Button