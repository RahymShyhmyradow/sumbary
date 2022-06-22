import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderMain1() {
    const settings = {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    };
    return (
        <div className='w-full' style={{ marginTop: '-5px' }}>
            <Slider {...settings}>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/zPNODOYPLi.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/Nge89D8cHu.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/KmZd09NFjQ.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/47LfDUyvRo.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
                <div className='border-2'>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full md:h-40 h-36 cursor-pointer' />
                </div>
            </Slider>
        </div>
    )
}

export default SliderMain1
