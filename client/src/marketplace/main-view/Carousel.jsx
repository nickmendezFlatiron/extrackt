import React from 'react'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import uuid from 'react-uuid';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// make carousel using react slick package
const Carousel = ({collection}) => {

  const featured = [collection,collection,collection,collection,collection,collection,collection,collection,collection,collection]
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 5
  }

  const slides = featured.map(c => {return <Image className='p-2 rounded-4' src={c.artwork} key={uuid()}/>
    
  })

  return (
    <Slider {...settings} classNames="creme-bg">
        {slides}
    </Slider>
  )
}

export default Carousel