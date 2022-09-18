import {React} from 'react'
import UploadTableRowForm from './UploadTableRowForm'
import uuid from 'react-uuid'
import Table from 'react-bootstrap/Table'

import SubmittedRow from './SubmittedRow'

const FormTable = ({samples , setSamples}) => {
  const rows = samples.map(sample => {
    return <SubmittedRow 
      sample={sample} 
      key={uuid()} 
      samples={samples} 
      setSamples={setSamples}
    />
  })

  return (
    <>
    <Table borderless responsive className='bg-light shadow rounded-3 sample-tbody p-2' >
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Local File</th>
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