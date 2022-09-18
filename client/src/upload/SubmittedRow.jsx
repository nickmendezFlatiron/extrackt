import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

const SubmittedRow = ({sample}) => {
  const {file , name , keyLabel, genre, bpm, type} = sample
  const tableKey = keyLabel.map(element => element.label).join("")
  // const tableKey = `${key[0].value}${key[1].value} ${key[2].value}`

  return (
    <tr className="shadow-sm">
      <td><CloseButton className="ms-3" /></td>
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