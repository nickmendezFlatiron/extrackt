import React from 'react'

import CloseButton from 'react-bootstrap/CloseButton'

const EditTableRow = ({sample}) => {
  const {id, name, genre, sample_type, bpm, key} = sample

  const letters = ["a", "b", "c", "d", "e", "f", "g"]
  const half = ["sharp", "flat"]
  // const scale = ["major", 'minor']
  
  const renderKeys = key.map(k =>{
      if (letters.includes(k)){
        return k.toUpperCase()
      } else if (half.includes(k)){
       return k === "flat" ? "♭" : "♯";
      } else return k
  }).join("")

  return (
    <tr id={name} className="align-middle" >
    <td>{name}</td>
    <td>{genre}</td>
    <td>{sample_type}</td>
    <td>{bpm}</td>
    <td>{renderKeys}</td>
    <td>
      <CloseButton/>
      {/* <Button id={id} type="button" onClick={handleDownload}>DL</Button> */}
      {/* <Button variant="white" className=" ms-2 text-primary">✓</Button> */}
    </td>
  </tr>
  )
}

export default EditTableRow