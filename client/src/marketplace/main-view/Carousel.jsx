import React from 'react'
import Slider from 'react-slick'
import Image from 'react-bootstrap/Image'
import CarouselCard from './CarouselCard'

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
    slidesToShow: 5,
    slidesToScroll: 5
  }

  const slides = featured.map(c => {return <CarouselCard c={c} key={uuid()}/>})

  return (
    <Slider {...settings} classNames="creme-bg">
        {slides}
    </Slider>
  )
}

export default Carousel