import {React, useState} from 'react'
import UploadTableRowForm from './UploadTableRowForm'
import uuid from 'react-uuid'
import Table from 'react-bootstrap/Table'

import SubmittedRow from './SubmittedRow'

const FormTable = ({samples , setSamples}) => {
  
  
  

  const rows = samples.map(sample => {return <SubmittedRow sample={sample} key={uuid()} />})

  return (
    <>
    <Table borderless className='creme-bg rounded-3 sample-tbody '>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">File</th>
          <th scope="col">Sample Name</th>
          <th scope="col">Key</th>
          <th scope="col">Genre</th>
          <th scope="col">BPM</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody >
       <UploadTableRowForm setSamples={setSamples} samples={samples}/>
        {rows}
      </tbody>
    </Table>
    </>
  )
}

export default FormTable