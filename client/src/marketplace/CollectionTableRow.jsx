import React from 'react'

import Button from 'react-bootstrap/Button'
import {songKeys} from '../context/SelectContext'
const CollectionTableRow = ({sample, SetSamplePreview}) => {
  const {name , bpm, artist, genre, key, sample_type, sample_url} = sample
  
  const letters = ["a", "b", "c", "d", "e", "f", "g"]
  const half = ["sharp", "flat"]
  const scale = ["major", 'minor']

  const renderKeys = key.map(k =>{
      if (letters.includes(k)){
        return k.toUpperCase()
      } else if (half.includes(k)){
       return k === "flat" ? "♭" : "♯";
      } else return k
  }).join("")

  


  function handleSetSamplePreview(){
    SetSamplePreview(sample)
  }

  
  return (
    <tr className="align-middle">
      <td>{name}</td>
      <td>{artist}</td>
      <td>{genre}</td>
      <td>{bpm}</td>
      <td>{renderKeys}</td>
      <td>
        <Button>DL</Button>
        {/* <Button variant="white" className=" ms-2 text-primary">✓</Button> */}
      </td>
    </tr>
  )
}

export default CollectionTableRow