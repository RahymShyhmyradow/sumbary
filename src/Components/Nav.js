import React, { useEffect, useState } from 'react'
import { AiFillSignal } from "react-icons/ai";
import { TbDeviceDesktop } from "react-icons/tb";
import { RiArrowDropRightFill } from 'react-icons/ri'
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import { category } from './category';
import { useSelector } from 'react-redux'
function Nav() {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-100%'
    }
  }
  const transition = {
    type: "spring",
    stiffness: 20
  }
  const navToggle = useSelector(state => state.navToggle.navToggle)
  let title=useLocation()
  const [nav, setNav]=useState(false)
  useEffect(()=>{
    title.pathname.includes('category') ? setNav(true):setNav(false)
  },[title.pathname])
  return (
    <div className={!nav ? 'md:w-1/4 w-full':'w-0 hidden'}>
      {!navToggle &&
        <div
          className='md:mt-5 flex container mx-auto mb-1'>
          <section className='w-full md:mr-6 mr-0 flex flex-col'>
            <Link to='/all' className='md:flex hidden rounded-t-md items-center p-2 py-3 bg-red-600 w-full text-white font-bold rounded-top-xl'>
              <AiFillSignal className='ml-5' /> <p className='ml-1 text-xs'>AHLI HARYTLAR</p>
            </Link>
            {category.map(e => (
              <div className='w-full relative'>
                <div className='peer border-2 h-10 border-b-0 p-2 w-full flex items-center justify-between'>
                  {e.data.length > 0 ? <div className='flex items-center'>
                    <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>{e.title}</p>
                  </div> :
                    <Link to={`/category/${e.link}`} className='w-full'>
                      <div className='flex items-center'>
                        <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>{e.title}</p>
                      </div>
                    </Link>
                  }
                  {e.data.length > 0 && <RiArrowDropRightFill className='text-2xl opacity-40' />}
                </div>
                {e.data.length > 0 && <div className="hidden bg-white absolute peer-hover:flex hover:flex p-1 border-2 top-0 -right-[360px] flex-col w-full z-10 ">
                  {e.data.map((r) => (
                    <Link to={`/category/${r.link}`} className='py-2 px-2 mx-2 hover:bg-gray-200'>{r.title}</Link>
                  ))
                  }
                </div>}
              </div>
            ))}
            {/* <div className='w-full relative'>
              <div className='peer border-2 h-10 border-b-0 p-2 w-full flex items-center justify-between'>
                <div className='flex items-center'>
                  <TbDeviceDesktop className='text-3xl mr-2' /> <p className='text-sm'>MONITOR</p>
                </div>
                <RiArrowDropRightFill className='text-2xl opacity-40' />
              </div>
              <div className="transition-all ease-in-out delay-150 duration-300 hidden bg-white absolute peer-hover:flex hover:flex p-1 border-2 top-0 left-[360px] flex-col w-full z-10">
                <Link to="#" className='py-2 px-2 mx-2 hover:bg-gray-200'>PK ucin korpuslar</Link>
                <Link to="#" className='py-2 px-2 mx-2 hover:bg-gray-200'>Esasy Platalar</Link>
                <Link to="#" className='py-2 px-2 mx-2 hover:bg-gray-200'>Prosesorlar (CPU)</Link>
              </div>
            </div> */}
          </section >
        </div >
      }
    </div>
  )
}

export default Nav
