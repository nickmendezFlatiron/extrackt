import React from 'react'
import Image from 'react-bootstrap/Image'

const CarouselCard = ({c}) => {
  return (
    <div className="text-break m-2 carousel-card">
        <Image className='carousel-pic' src={c.artwork} />
        <small>{c.collection_name}</small>
    </div>
  )
}

export default CarouselCard