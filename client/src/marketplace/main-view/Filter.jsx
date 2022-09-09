import React from 'react'

import Form from  'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Filter = () => {
  return (
    
    <Form>
      <h3 className="text-center mt-2">Filter</h3>
      <InputGroup size="lg" className="px-2 mb-3">
        <FormControl  
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" 
          placeholder='Search Samples...' 
          // value={searchQuery} 
          // onChange={handleFilter}
          />
      </InputGroup>
      <Form.Group className="px-5 mb-3">
        <Form.Select aria-label="Default select example" label="Key">
          <option>Key</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="px-5 mb-3">
        <Form.Select aria-label="Default select example" label="Key">
          <option>Genre</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="px-5 mb-3">
        <Form.Select aria-label="Default select example" label="Key">
          <option>BPM</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="px-5 mb-3">
        <Form.Select aria-label="Default select example" label="Key">
          <option>Type</option>
        </Form.Select>
      </Form.Group>
    </Form>
  )
}

export default Filter