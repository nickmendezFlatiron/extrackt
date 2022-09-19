import React from 'react'

import Button from 'react-bootstrap/Button'

const CollectionTableRow = ({sample}) => {
  const {name , bpm, artist, genre, key, sample_type, sample_url} = sample
  return (
    <tr className="align-middle">
      <td>
        <Button variant="outline-primary">Play</Button>
      </td>
      <td>{name}</td>
      <td>{artist}</td>
      <td>{genre}</td>
      <td>{bpm}</td>
      <td>{key}</td>
      <td>
        <Button>DL</Button>
        {/* <Button variant="white" className=" ms-2 text-primary">✓</Button> */}
      </td>
    </tr>
  )
}

export default CollectionTableRow