import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderMain() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };
    return (
        <div className='w-full border-box' style={{ zIndex: '-9999' }}>
            <Slider {...settings}>
                <div className=''>
                    <img src='https://sumbar-computer.com/storage/s/zPNODOYPLi.jpg' className='w-full h-48 md:h-auto cursor-pointer' />
                </div>
                <div className=''>
                    <img src='https://sumbar-computer.com/storage/s/Nge89D8cHu.jpg' className='w-full h-48 md:h-auto cursor-pointer' />
                </div>
                <div>
                    <img src='https://sumbar-computer.com/storage/s/KmZd09NFjQ.jpg' className='w-full h-48 md:h-auto cursor-pointer' />
                </div>
                <div>
                    <img src='https://sumbar-computer.com/storage/s/47LfDUyvRo.jpg' className='w-full h-48 md:h-auto cursor-pointer' />
                </div>
                <div>
                    <img src='https://sumbar-computer.com/storage/s/NxiC4VI8kG.jpg' className='w-full h-48 md:h-auto cursor-pointer' />
                </div>
            </Slider>
        </div>
    )
}

export default SliderMain
