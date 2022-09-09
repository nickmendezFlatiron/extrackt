import {React, useState} from 'react'
import UploadTableRowForm from './UploadTableRowForm'
import uuid from 'react-uuid'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const FormTable = () => {
  const [samples , setSamples] = useState([])

  function addRow(){
   
  }

  
  return (
    <>
    <Table borderless className='creme-bg rounded-3'>
      <thead>
        <tr>
          <th scope="col">Delete</th>
          <th scope="col">File</th>
          <th scope="col">Sample Name</th>
          <th scope="col">Categories</th>
          <th scope="col">Key</th>
          <th scope="col">Genre</th>
          <th scope="col">BPM</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
       <UploadTableRowForm />
      </tbody>
    </Table>
    </>
  )
}

export default FormTable