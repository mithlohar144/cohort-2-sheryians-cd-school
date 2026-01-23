import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Productt = () => {
  const productData = useContext(ProductDataContext)

  let renderData =''
  if(productData.length > 0){
    renderData= productData.map(function (elem, idx) {
        return <Link  className='product' key={idx} to={`/product/${elem.id}`}>
          <div>
            <img src={elem.image} alt="" />
            <h1>{elem.title}</h1>
          </div>
        </Link>
      })

  return (

    <div className='allProduct'>
      {renderData}
    </div>
  )
}
}

export default Productt