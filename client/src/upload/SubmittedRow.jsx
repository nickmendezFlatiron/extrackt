import React from 'react'

const SubmittedRow = ({sample}) => {
  const {file , name , category , key, genre, bpm, type} = sample
  console.log(sample.key)

  const tableKey = key.map(element => element.label).join("")
  // const tableKey = `${key[0].value}${key[1].value} ${key[2].value}`
  debugger
  return (
    <tr>
      <td><button>delete</button></td>
      <td>{file.name}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{tableKey}</td>
      <td>{genre}</td>
      <td>{bpm}</td>
      <td>{type}</td>
    </tr>
  )
}

export default SubmittedRow