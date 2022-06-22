import React, { useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { data } from '../Components/allData'
import { AiOutlineZoomIn } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../Features/cartSlice'
function All() {
    const [filter, setFilter] = useState('Elipbiy boyunca')
    const [show, setShow] = useState(false)

    const [showPag, setShowPag] = useState(false)
    const [pag, setPag] = useState(40)
    const showFilter = () => {
        setShow(!show)
    }
    const handleShowPag = () => {
        setShowPag(!showPag)
    }
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const addCartOne = (product) => {
        const existItem = cartProducts.find(x => x.product.id === product.id)
        if (existItem) {
            dispatch(addCart({ quantity: existItem.quantity, product }))
        } else {
            dispatch(addCart({ quantity: 1, product }))
        }
    }
    return (
        <div className='md:w-3/4  w-full md:mt-5 mt-0' style={{ height: '999px' }}>
            <h1 className='mb-4 sm:mt-0 mt-5 text-center text-2xl font-bold'>ÄHLI HARYTLAR</h1>
            <div className='sm:mx-0 mx-3 my-5 flex items-center justify-between'>
                <p className=''>Haryt: 1297</p>
                <div className='flex'>
                    <div className='relative'>
                        <div onClick={() => showFilter()} className='hover:bg-gray-300 transition delay-200 flex items-center px-3 py-1 border-2 text-sm cursor-pointer'>
                            <p>{filter}</p>
                            <FaAngleDown />
                        </div>
                        {show &&
                            <div className="absolute z-10 w-36 right-0 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="text-xs text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li onClick={() => { setFilter('Elipbiy boyunca'); showFilter(false) }} className='cursor-pointer flex items-center hover:bg-gray-100'>
                                        <p className={filter === 'Elipbiy boyunca' ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>Elipbiy boyunca</p>
                                        {filter === 'Elipbiy boyunca' && <TiTick className='text-red-500' />}
                                    </li>
                                    <li onClick={() => { setFilter('Basda arzanladyslar'); showFilter(false) }} className='cursor-pointer flex items-center hover:bg-gray-100'>
                                        <p className={filter === 'Basda arzanladyslar' ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>Basda arzanladyslar</p>
                                        {filter === 'Basda arzanladyslar' && <TiTick className='text-red-500' />}
                                    </li>
                                    <li onClick={() => { setFilter('Meshurlar'); showFilter(false) }} className='cursor-pointer flex items-center hover:bg-gray-100'>
                                        <p className={filter === 'Meshurlar' ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>Meshurlar</p>
                                        {filter === 'Meshurlar' && <TiTick className='text-red-500' />}
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='relative ml-1'>
                        <div onClick={() => handleShowPag()} className='hover:bg-gray-300 transition delay-200 flex items-center px-3 py-1 border-2 text-sm cursor-pointer'>
                            <p>{pag}</p>
                            <FaAngleDown />
                        </div>
                        {showPag &&
                            <div className="absolute z-10 w-16 right-0 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="text-xs text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li onClick={() => { setPag(40); handleShowPag(false) }} className='cursor-pointer flex w-full items-center hover:bg-gray-100'>
                                        <p className={pag === 40 ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>40</p>
                                        {pag === 40 && <TiTick className='ml-1 text-red-500' />}
                                    </li>
                                    <li onClick={() => { setPag(60); handleShowPag(false) }} className='cursor-pointer flex w-full items-center hover:bg-gray-100'>
                                        <p className={pag === 60 ? "cursor-pointer text-red-500 block py-1 pl-4 text-md" : "text-md cursor-pointer block py-1 pl-4"}>60</p>
                                        {pag === 60 && <TiTick className='ml-1 text-red-500' />}
                                    </li>
                                    <li onClick={() => { setPag(80); handleShowPag(false) }} className='cursor-pointer flex w-full items-center hover:bg-gray-100'>
                                        <p className={pag === 80 ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>80</p>
                                        {pag === 80 && <TiTick className='ml-1 text-red-500' />}
                                    </li>
                                    <li onClick={() => { setPag(100); handleShowPag(false) }} className='cursor-pointer flex w-full items-center hover:bg-gray-100'>
                                        <p className={pag === 100 ? "text-red-500 block py-1 pl-4 text-md" : "text-md block py-1 pl-4"}>100</p>
                                        {pag === 100 && <TiTick className='ml-1 text-red-500' />}
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-2 grid-gap-2 sm:grid-cols-3 sm:grid-gap-3 md:grid-cols-2 md:grid-gap-2 lg:grid-cols-3 lg:grid-gap-3 xl:grid-cols-4 xl:grid-gap-4'>
                {data.map(e => (
                    <div data-aos="fade"
                        className='relative m-0 border-2 p-1' >
                        <div className='flex items-center justify-end'>
                            <div className='flex items-center md:border-2 rounded-md px-1'>
                                <input className='md:mr-1' id='denesdir' type={'checkbox'} />
                                <label htmlFor='denesdir' className='md:block hidden'>Denesdirmek</label>
                            </div>
                            <AiOutlineZoomIn className='text-xl mx-1' />
                            <AiOutlineHeart className='text-xl text-red-500' />
                        </div>
                        <div className='absolute overflow-hidden text-center w-16 h-16' style={{ top: '-1px', left: '-1px' }}>
                            <span className='text-sm text-white bg-red-500 absolute block text-center transform -rotate-45' style={{ width: '10rem', left: '-3.5rem', top: '1rem' }}>
                                Taze
                            </span>
                        </div>
                        <img src={e.img} />
                        <div className='flex flex-col items-center'>
                            <h1 className='text-center px-1 h-20'>{e.title}</h1>
                            <p className='w-12 h-0.5 bg-red-500'></p>
                            <div className='flex justify-center my-1 items-center'>
                                <p className='font-bold mr-1'>{e.price}.00</p>
                                <span className=''>TMT</span>
                            </div>
                            <button onClick={() => addCartOne(e)} className='mb-2 bg-red-600 text-xs px-4 py-2 text-white rounded-2xl transition duration-500 hover:bg-black'>
                                SEBEDE GOS
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default All
