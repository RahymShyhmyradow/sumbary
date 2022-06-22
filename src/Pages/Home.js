import React, { useEffect, useState } from 'react'
import SliderMain from '../Components/SliderMain'
import SliderMain1 from '../Components/SliderMain1'
import { RiArrowDropRightFill } from 'react-icons/ri'
import { AiOutlineZoomIn } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { data } from '../Components/data'
import AOS from 'aos';
import "aos/dist/aos.css";
import Monitor from '../Components/Monitor'
import Notebooks from '../Components/Notebooks'
function Home() {
    const [menu, setMenu] = useState(0)
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        AOS.refresh();
    }, []);
    return (
        <div className='md:w-3/4 w-full md:mt-5 mt-0' style={{ height: '999px' }}>
            <SliderMain />
            <SliderMain1 />
            <div className='w-full my-3'>
                <ul className='flex justify-center flex-wrap'>
                    <li onClick={() => setMenu(0)} className={menu === 0 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>MASLAHAT BERILYANLER</li>
                    <li onClick={() => setMenu(1)} className={menu === 1 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>TAZELER</li>
                    <li onClick={() => setMenu(2)} className={menu === 2 ? 'border-b-2 border-red-600 mx-4 font-bold text-lg text-red-600' : 'cursor-pointer mx-4 font-bold text-lg'}>MESHURLAR</li>
                </ul>
            </div>
            <div className='w-full'>
                <div className='w-full flex justify-end items-center my-2'>
                    <RiArrowDropRightFill className='text-3xl' />
                    <h1 className='md:text-md mr-3 md:font-bold'>Hemmesi</h1>
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
                                <button className='mb-2 bg-red-600 text-xs px-4 py-2 text-white rounded-2xl transition duration-500 hover:bg-black'>
                                    SEBEDE GOS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pb-4'>
                <div className='w-full flex justify-center items-center mt-6 mb-3'>
                    <RiArrowDropRightFill className='w-10 h-10' />
                    <h1 className='md:text-lg mr-3 md:font-bold'>MONITOR</h1>
                </div>
                <Monitor />
            </div>
            <div className='pb-4'>
                <div className='w-full flex justify-center items-center mt-6 mb-3'>
                    <RiArrowDropRightFill className='w-10 h-10' />
                    <h1 className='md:text-lg mr-3 md:font-bold'>NOUTBUKLAR</h1>
                </div>
                <Notebooks />
            </div>
        </div >
    )
}

export default Home
