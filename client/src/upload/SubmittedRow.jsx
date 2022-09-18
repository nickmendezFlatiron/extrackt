import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

const SubmittedRow = ({sample ,setSamples, samples}) => {
  const {file , name , keyLabel, genre, bpm, type, id} = sample
  const tableKey = keyLabel.map(element => element.label).join("")
  // const tableKey = `${key[0].value}${key[1].value} ${key[2].value}`
  function handleDelete() {
    const filteredSamples = samples.filter(s => s.id !== sample.id )
    setSamples(filteredSamples)
  }

  return (
    <tr className="shadow-sm ">
      <td><CloseButton onClick={handleDelete}  className="ms-3" /></td>
      <td>{file.name}</td>
      <td>{name}</td>
      <td>{tableKey}</td>
      <td>{genre}</td>
      <td>{bpm}</td>
      <td>{type}</td>
    </tr>
  )
}

export default SubmittedRow