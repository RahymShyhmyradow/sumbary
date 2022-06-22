import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RiCloseLine } from "react-icons/ri";
import { AiOutlinePlus } from 'react-icons/ai'
import { HiMinusSm } from 'react-icons/hi'
import { addCart, delItemToCart } from '../Features/cartSlice';
import { BsSearch } from 'react-icons/bs'
import { welayatlar } from '../Components/welayatlar'
function Corzina() {
    let { title } = useParams()
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const [data, setData] = useState(0)
    const [jem, setJem] = useState(0)
    useEffect(() => {
        cartProducts.map(e => {
            setJem(jem + e.quantity * e.product.price)
        })
    }, [cartProducts])
    console.log(jem);
    return (
        <div className='md:w-3/4 w-full mt-5'>
            <h1 className='mb-4 sm:mt-0 mt-5 text-center text-2xl font-bold'>SEBEDIM</h1>
            <div className='hidden md:flex items-center w-full h-16 border-2 bg-white'>
                <div className='w-3/4 flex items-center'>
                    <p className='ml-4'>Haryt</p>
                </div>
                <div className='w-2/4 flex items-center justify-between pr-3'>
                    <p>Sany</p>
                    <p>Jemi</p>
                    <RiCloseLine className='bg-gray-200 text-gray-400 text-xl cursor-pointer' />
                </div>
            </div>
            {cartProducts.length === 0 && <div className='flex justify-center aling-center items-center flex-col w-full my-20'>
                <BsSearch className='text-4xl text-red-500' />
                <p className='font-bold text-xl'>Haryt tapylmady</p>
            </div>}
            {
                cartProducts.map(e => (
                    <div className='flex items-center w-full h-20 border-2 md:border-t-0 bg-white'>
                        <div className='w-3/4 flex items-center'>
                            <img src={e.product.img} className='h-16 w-20 md:mx-4 mx-1' />
                            <p className='md:text-md text-sm'>{e.product.title}</p>
                        </div>
                        <div className='w-2/4 flex items-center justify-between pr-3'>
                            <div className='flex md:flex-row flex-col items-center'>
                                <HiMinusSm onClick={() => dispatch(addCart({ quantity: e.quantity > 1 && e.quantity - 1, product: e.product }))} className='bg-gray-200 text-md md:text-2xl p-0.5 text-gray-400 cursor-pointer' />
                                {e.quantity === 0 ? <p className='mx-2 text-red-400 font-bold'>0</p> : <p className='md:mx-2 text-red-400 font-bold'>{e.quantity}</p>}
                                <AiOutlinePlus onClick={() => dispatch(addCart({ quantity: e.quantity + 1, product: e.product }))} className='bg-gray-200 text-gray-400 p-0.5 txt-md md:text-2xl cursor-pointer' />
                            </div>
                            <p className='md:text-md text-sm'>{e.quantity * e.product.price} {' '} TMT</p>
                            <RiCloseLine onClick={() => dispatch(delItemToCart(e.product.id))} className='bg-gray-200 text-gray-400 text-sm md:text-xl cursor-pointer' />
                        </div>
                    </div>
                ))
            }
            <div className='w-1/2 float-right mt-8'>
                <form>
                    <div>
                        <div className='mb-2'>
                            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Eltip bermek üçin şäheriňiz <span className='text-red-500'>*</span></label>
                            <select onClick={(e) => setData(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-500 focus:border-red-500 block w-full p-2">
                                {welayatlar.map((e, k) => (
                                    <option value={k}>{e.title}</option>
                                ))}
                            </select>
                            {welayatlar[data].data.length > 0 && <select id="country" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-500 focus:border-red-500 block w-full p-2">
                                {welayatlar[data].data.map(e => (
                                    <option>{e}</option>
                                ))}
                            </select>}
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Harytlar
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        1833 TMT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Eltip bermek
                                    </th>
                                    <td class="px-6 py-4">
                                        0 TMT
                                    </td>
                                </tr>
                                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Jemi
                                    </th>
                                    <td class="px-6 py-4 text-red-500">
                                        1833 TMT
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Corzina
