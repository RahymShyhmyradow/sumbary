import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Category() {
    let {title}=useParams()
    const cartProducts = useSelector(state => state.cart.cartProducts)
    console.log(cartProducts);
    return (
        <div className='w-full mt-5 bg-red-500'>
            <p className='text-3xl text-white'>Kategory {title}</p>
        </div>
    )
}

export default Category
