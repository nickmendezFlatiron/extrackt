import {React, useContext} from 'react'
import CollectionContext from '../../context/CollectionContext';
import CarouselCard from './CarouselCard'

import uuid from 'react-uuid';
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// make carousel using react slick package
const Carousel = () => {
  const {collection} = useContext(CollectionContext)
 
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

  const slides = collection?.map(c => {return <CarouselCard c={c} key={uuid()}/>})

  return (
    <Slider {...settings} classNames="creme-bg">
        {slides}
    </Slider>
  )
}

export default Carousel