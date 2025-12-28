import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-emerald-600 px-5 py-2 rounded w-fit text-lg font-bold m-2 text-white '>{props.text}</div>
  )
}

export default Button