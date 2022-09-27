import React from 'react'


const CollectionTableRow = ({sample, setArrayIndex, samples, arrayIndex, showAlert}) => {
  const {id, name , bpm,  genre, sample_key, sample_type} = sample

  const letters = ["a", "b", "c", "d", "e", "f", "g"]
  const half = ["sharp", "flat"]
  const scale = ["major", 'minor']
  
  const renderKeys = sample_key.map(k =>{
      if (letters.includes(k)){
        return k.toUpperCase()
      } else if (half.includes(k)){
       return k === "flat" ? "♭" : "♯";
      } else return k
  }).join("")

  

  function handleSelectedSample(e){
    e.stopPropagation()
    const index = samples.findIndex(s => s.name === name)
    setArrayIndex(index)
  }

  return (
    <tr id={name} className="align-middle" onClick={handleSelectedSample}>
      <td>{name}</td>
      <td>{genre}</td>
      <td>{sample_type}</td>
      <td>{bpm}</td>
      <td>{renderKeys}</td>
      <td>
        <a href={`http://localhost:3000/samples/${id}`} download >DL</a>
      </td>
    </tr>
  )
}

export default CollectionTableRow