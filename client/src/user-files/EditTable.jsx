import {React, useState} from 'react'

import Table from 'react-bootstrap/Table'
import uuid from 'react-uuid'
import EditTableRow from './EditTableRow'

const EditTable = ({samples}) => {
  const [deletePermission, toggleDeletePermission] = useState(false)

  const renderSamples = samples?.map(sample=>{return <EditTableRow 
                                                        key={uuid()} 
                                                        sample={sample} 
                                                        deletePermission={deletePermission} 
                                                        toggleDeletePermission={toggleDeletePermission}
                                                        samples={samples}
                                                      />})
  return (
    <Table hover responsive className=''>
      <thead>
        <tr>
          <th scope="col">Sample Name</th>
          <th scope="col">Genre</th>
          <th scope="col">Type</th>
          <th scope="col">BPM</th>
          <th scope="col">Key</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody className="">
        {renderSamples}
      </tbody>
  </Table>
  )
}

export default EditTable