import React from 'react'

const Navbar = (props) => {
  return (
    <div className='bg-pink-700 text-white px-8 py3 items-center justify-between'>
        <h2>{props.title}</h2>
        <div className='flex gap-40'>
            {props.links.map(function(elem){
                return <h4>{elem}</h4>
            })}
        </div>
    </div>
  )
}

export default Navbar