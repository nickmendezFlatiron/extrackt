import React from 'react'

import CollectionTableRow from "./CollectionTableRow"
import Table from 'react-bootstrap/Table'
import uuid from 'react-uuid'

const CollectionTable = () => {

  const sample = {
    id: 3,
    name: 'snare',
    key: "A",
    bpm: 126,
    genre: "House",
    artist: "Admin",
    type: "One-Shot",
    format: "wav",
    collection_id: 1
  }

  return (
    <Table hover className=''>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Sample Name</th>
          <th scope="col">Artist</th>
          <th scope="col">Genre</th>
          <th scope="col">BPM</th>
          <th scope="col">Key</th>
          <th scope="col">DL/Like</th>
        </tr>
      </thead>
      <tbody className="">
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
        <CollectionTableRow key={uuid()} sample={sample}/>
      <CollectionTableRow key={uuid()} sample={sample}/>
      <CollectionTableRow key={uuid()} sample={sample}/>
      <CollectionTableRow key={uuid()} sample={sample}/>
      <CollectionTableRow key={uuid()} sample={sample}/>
      </tbody>
    </Table>
  )
}

export default CollectionTable