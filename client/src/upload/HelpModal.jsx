import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const HelpModal = ({helpModal, setHelpModal}) => {
  return (
    
    <>
      <Modal show={helpModal} onHide={()=>setHelpModal(false)}>
        <Modal.Header  className="text-primary text-center justify-content-center d-flex">
          <Modal.Title>
            Collection Upload Help
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className="d-flex align-items-top bg-light justify-content-start">
          <Col >
            <h4>Name</h4>
            <br/>
            <h4 className="pt-2">Description</h4>
            <br/>
            <h4  className="pt-2">Artwork</h4>
            <br/>
            <h4  className="pt-2">Samples</h4>
          </Col>
          <Col xs={8}>
            <p>Name for your collection in 40 characters or less</p>
            <p>Describe your collection in 180 characters or less</p>
            <p>Upload any image file 1 megabyte or smaller</p>
            <p>Samples must be a WAV file of any size.
              Select the available dropdown options which best describes your audio sample.
              These settings cannot be changes once the sample is uploaded.
            </p>
          </Col>
      
        </Row>
        <Row className="d-flex align-items-top justify-content-start">
        
        </Row>
        <Row className="d-flex align-items-top justify-content-start bg-light">
          <Col className="col-auto">
          </Col>
          <Col xs={8}>
          </Col>
        </Row>
        <Row className="d-flex align-items-top justify-content-start bg-light">
          <Col className="col-auto">
          </Col>
          <Col xs={8}>
          </Col>
        </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={()=>setHelpModal(false)}>Got it.</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HelpModal