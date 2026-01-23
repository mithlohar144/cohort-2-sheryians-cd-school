
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const ProductDataContext = createContext()
import { Getdata } from '../api/productApi'
const ProductContext = (props) => {
    const [Product, setProduct] = useState([])

    const setData = async () => {
        const data = await Getdata()
        setProduct(data)
    }
    useEffect(() => {
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext.Provider value={Product}>
                {props.children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext