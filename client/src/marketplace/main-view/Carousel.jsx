import {React} from 'react'

import CarouselCard from './CarouselCard'

import Spinner from 'react-bootstrap/Spinner';
import uuid from 'react-uuid';
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// make carousel using react slick package
const Carousel = ({featuredCollections}) => {
  const slideCount = featuredCollections && featuredCollections.length < 5 ? featuredCollections.length : 5;  
  const isInfinite = featuredCollections && slideCount < 5 ? false : true ;
  const settings = {
    lazyLoad: true,
    arrows: false,
    dots: true,
    infinite: isInfinite,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: slideCount,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }
  if (!featuredCollections ) return <Spinner animation="border" variant="secondary" className="m-3"/>
  const slides = featuredCollections && featuredCollections.map(c => {return <CarouselCard c={c} key={uuid()}/>})
  return (
    <Slider key={uuid()} {...settings} >
        {slides}
    </Slider>
  )
}

export default Carousel