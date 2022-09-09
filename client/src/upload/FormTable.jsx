import React from 'react'
import FormTableRow from './FormTableRow'

import Table from 'react-bootstrap/Table'
const FormTable = () => {
  return (
    <Table borderless className='creme-bg rounded-3'>
      <thead>
        <tr>
          <th scope="col">Delete</th>
          <th scope="col">Sample Name</th>
          <th scope="col">Categories</th>
          <th scope="col">Key</th>
          <th scope="col">Genre</th>
          <th scope="col">BPM</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        <FormTableRow />
      </tbody>
    </Table>
  )
}

export default FormTable