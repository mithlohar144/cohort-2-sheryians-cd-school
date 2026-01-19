import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-wrap items-center justify-between px-2 py-4'>
        <h1 className='text-2xl font-extralight'>Mithilesh </h1>
        <div className='flex gap-8'>
            <Link to="/">Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/product"> Product </Link>
        </div>

    </div>
  )
}

export default Navbar