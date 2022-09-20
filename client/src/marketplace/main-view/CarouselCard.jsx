import React from 'react'
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'
const CarouselCard = ({c}) => {

  const navigate = useNavigate()
  function handleClick(){
    navigate(`/marketplace/${c.id}`)
  }
  return (
    <div className="text-break m-2 " onClick={handleClick}>
        <Image className='carousel-pic' src={c.cover_art_url} />
        <small>{c.name}</small>
    </div>
  )
}

export default CarouselCard