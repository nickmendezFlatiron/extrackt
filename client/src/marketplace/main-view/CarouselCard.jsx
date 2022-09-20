import {React, useContext} from 'react'
import CollectionContext from "../../context/CollectionContext"
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom'


const CarouselCard = ({c}) => {
  const {setCollection} = useContext(CollectionContext)
  const navigate = useNavigate()
  function handleClick(){
    setCollection(null)
    navigate(`/marketplace/${c.id}`)
  }
  return (
    <div className="text-break m-2 carousel-card " onClick={handleClick}>
        <Image className='carousel-pic shadow-sm rounded-3' src={c.cover_art_url} />
        <small>{c.name}</small>
    </div>
  )
}

export default CarouselCard