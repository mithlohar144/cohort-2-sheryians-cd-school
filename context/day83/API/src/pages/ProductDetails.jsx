import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)

    const { id } = useParams();
    let seclectedProduct = '';
    if (productData.length > 0) {
        seclectedProduct = productData.find((elem) => id == elem.id);
    }

    console.log(seclectedProduct);
    
    // const seletedProduct = productData.find((elem) => id == elem.id);
    // console.log(seletedProduct);


    return (
        <div>
           <div>
                <img src={seclectedProduct.image} alt="" />
                <h1>{seclectedProduct.title}</h1>
                <h2>{seclectedProduct.description}</h2>
                <h2>{seclectedProduct.price}</h2>
            </div>
        </div>
    )
}

export default ProductDetails