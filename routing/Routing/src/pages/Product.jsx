import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div> <h1 className="text-5xl font-semibold absolute ">
        Product Page
      </h1>
      <div className='flex gap-5'>
      <Link to="/product/men" className="text-xl font-semibold underline">Men</Link>
      <Link to="/product/women" className="text-xl font-semibold underline">Women</Link></div>
      </div>
  )
}

export default Product