import React from 'react'

import CollectionTableRow from "./CollectionTableRow"
import Table from 'react-bootstrap/Table'
import uuid from 'react-uuid'
// import Button from 'react-bootstrap/Button'

const CollectionTable = ({samples, SetSamplePreview}) => {

  const renderSamples = samples?.map(sample=>{
    return <CollectionTableRow key={uuid()} sample={sample} SetSamplePreview={SetSamplePreview}/>
  })
  return (
    <Table hover responsive className=''>
      <thead>
        <tr>
          <th scope="col">Sample Name</th>
          <th scope="col">Artist</th>
          <th scope="col">Genre</th>
          <th scope="col">BPM</th>
          <th scope="col">Key</th>
          <th scope="col">DL/Like</th>
        </tr>
      </thead>
      <tbody className="">
        {renderSamples}
      </tbody>
    </Table>
  )
}

export default CollectionTable