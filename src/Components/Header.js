import React, { useEffect, useState } from 'react'
import { RiPhoneLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { VscGlobe } from "react-icons/vsc";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";
import Logo from '../img/logo.svg'
import { useSelector, useDispatch } from 'react-redux';
import { handleNavToggle } from '../Features/NavToggleSlice';
import { TiTimes } from "react-icons/ti";
function Header() {
    const [showLang, setShowLang] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [sortLang, setSortLang] = useState('Turkmen')
    const ShowLang = () => {
        setShowLang(!showLang)
    }
    const ShowSearch = () => {
        setShowSearch(!showSearch)
    }
    const [header, setHeader] = useState("header");

    const listenScrollEvent = () => {
        if (window.scrollY < 13) {
            return setHeader("header");
        } else if (window.scrollY > 13) {
            return setHeader("header2");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
    const navToggle = useSelector(state => state.navToggle.navToggle)
    const dispatch = useDispatch()
    const toggleMenu = () => {
        dispatch(handleNavToggle())
    }
    const cartProducts = useSelector(state => state.cart.cartProducts)
    return (
        <div className='bg-black text-gray-400'>
            <nav className={`container mx-auto h-10 flex justify-between items-center`}>
                <div className='flex items-center'>
                    <RiPhoneLine />
                    <p className='text-xs'>+993 (64) 22-20-17</p>
                </div>
                <div className='md:block hidden text-sm'>
                    <Link to='/about'>Biz barada</Link>
                    <Link to='/service' className='md:mx-4 mx-2'>Tehniki hyzmat</Link>
                    <Link to='/guarantee'>Kepillik</Link>
                    <Link to='/delivery-and-payment' className='md:mx-4 mx-2'>Eltip bermek we töleg</Link>
                    <Link to='/ratings'>teswirler</Link>
                    <Link to='/' className='md:ml-4 ml-2'>Nagilelik bildirmek</Link>
                </div>
                <div className='flex items-center md:mx-0 mx-2'>
                    <VscGlobe />
                    <ul>
                        <li className='relative'>
                            <div onClick={() => ShowLang()} className='text-xs cursor-pointer'>
                                {sortLang}
                            </div>
                            {showLang &&
                                <div className="absolute mt-1 z-10 w-24 right-0 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-xs text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <p onClick={() => { setSortLang('Turkmen'); setShowLang(false) }} className="cursor-pointer block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Turkmen</p>
                                        </li>
                                        <li>
                                            <p onClick={() => { setSortLang('English'); setShowLang(false) }} className="cursor-pointer block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</p>
                                        </li>
                                        <li>
                                            <p onClick={() => { setSortLang('Russian'); setShowLang(false) }} className="cursor-pointer block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Russian</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`w-full bg-black ${header}`}>
                <header className={`h-16 bg-black container justify-between mx-auto flex items-center`}>
                    <Link to='/'><img src={Logo} className='md:w-64 w-48' /></Link>
                    <form className='md:w-44 lg:w-1/3 mr-24 md:block hidden'>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="ring-red-500 outline-transparent block items-center py-2 p-1 pl-10 w-full text-sm text-gray-900  bg-white rounded-lg border   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Gozleg" />
                        </div>
                    </form>
                    <div className='flex items-center'>
                        <div onClick={() => ShowSearch()} className='md:hidden block mr-1 text-3xl text-white cursor-pointer'>
                            <RiSearchLine />
                        </div>
                        <div className="relative cursor-pointer md:p-0">
                            <Link to='/' >
                                <IoPersonCircleSharp className='md:p-0 md:w-auto text-3xl text-white' />
                            </Link>
                            <RiCloseFill className="absolute top-0 left-4 bg-red-500 rounded-full text-white text-sm" />
                        </div>
                        <div className="relative cursor-pointer md:p-0 ml-2">
                            <Link to='/card' >
                                <RiShoppingBasket2Line className='md:p-0 md:w-auto text-3xl text-white' />
                            </Link>
                            <p className="absolute top-0 left-4 bg-red-500 rounded-full text-white text-xs px-1.5" >{cartProducts.length}</p>
                        </div>
                        {/* <Link to='/card'><RiShoppingBasket2Line className='text-3xl text-white ml-1' /></Link> */}
                        {navToggle ?
                            <TbMenu onClick={() => toggleMenu()} className='cursor-pointer md:hidden block text-3xl text-white mx-1' /> :
                            <TiTimes onClick={() => toggleMenu()} className='cursor-pointer md:hidden block text-3xl text-white mx-1' />}
                    </div>
                </header>
                {showSearch &&
                    <div className='p-2 relative'>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="ring-red-500 outline-transparent block items-center py-2 p-1 pl-10 w-full text-sm text-gray-900  bg-white rounded-lg border" placeholder="Gozleg" />
                    </div>

                }
            </div>
        </div>
    )
}

export default Header
