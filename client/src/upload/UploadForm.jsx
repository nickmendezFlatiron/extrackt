import React from 'react'
import FormTable from './FormTable'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import cover from '../assets/stock-album-2.jpg'

const UploadForm = () => {
  return (
    <div className="mx-5">
      <Row>
        <Col className="pt-2 mx-2 upload-preview" lg="3">
          <h2 className="text-center mb-4">Upload Preview</h2>
          <Image src={cover} className="featured-preview offset mb-5"/>
          <h2 className='text-dark fw-bold '> Collection Name</h2>
          <h2 className="text-dkg">Artist</h2>
        </Col>
        <Col className=" pt-2 light-purple-bg rounded-3 mx-2">
          <Row className="mt-2">
            <Col className="col-auto">
              <h4 className="mb-3">Name</h4>
              <h4 className="my-4">Description</h4>
              <br/>
              <h4 className="mt-1">Artwork</h4>
              <h4 className="mt-1">Samples</h4>
            </Col>
            <Col>
              <Form className="">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter collection name here..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control className="text-break" as="textarea" placeholder="Describe your sample pack...."/>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3 w-25">
                  <Form.Control type="file" size="sm" />
                </Form.Group>
                <Form.Group>
                  <FormTable />
                  <Button className="form-button">+</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    
  )
}

export default UploadForm