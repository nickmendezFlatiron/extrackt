import React from 'react'

import Button from 'react-bootstrap/Button'

const CollectionTableRow = ({sample}) => {
  return (
    <tr className="align-middle">
      <td>
        <Button variant="outline-primary">Play</Button>
      </td>
      <td>{sample.name}</td>
      <td>{sample.artist}</td>
      <td>{sample.genre}</td>
      <td>{sample.bpm}</td>
      <td>{sample.key}</td>
      <td>
        <Button>DL</Button>
        <Button variant="white" className=" ms-2 text-primary">✓</Button>
      </td>
    </tr>
  )
}

export default CollectionTableRow