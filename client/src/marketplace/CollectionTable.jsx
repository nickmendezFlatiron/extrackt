import {React} from 'react'

import CollectionTableRow from "./CollectionTableRow"
import Table from 'react-bootstrap/Table'
import uuid from 'react-uuid'


const CollectionTable = ({samples, setArrayIndex, showAlert}) => {
  
  const renderSamples = samples.map(sample=>{
    return <CollectionTableRow key={uuid()} showAlert={showAlert} samples={samples} sample={sample} setArrayIndex={setArrayIndex}/>
  })
  return (
    <Table hover responsive className=''>
      <thead>
        <tr>
          <th scope="col">Sample Name</th>
          <th scope="col">Genre</th>
          <th scope="col">Type</th>
          <th scope="col">BPM</th>
          <th scope="col">Key</th>
          <th scope="col">DL/Like</th>
        </tr>
      </thead>
      <tbody >
        {renderSamples}
      </tbody>
    </Table>
  )
}

export default CollectionTable