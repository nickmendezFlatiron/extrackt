import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const PreviewModal = ({showModal , handleClose, coverArt , name , description , samples}) => {

  const imgSrc = coverArt && URL.createObjectURL(coverArt)

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Col className="pt-2 mx-2 text-center">
          <h3 className="text-center mb-4 text-secondary">Preview</h3>
          <Image src={imgSrc} className="cover-preview offset mb-5"/>
          <h2 className='text-dark fw-bold '> {name}</h2>
          <p className='text-dark '> {description}</p>
          <h6 className="text-dkg">{samples.length} Samples</h6>
        </Col> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default PreviewModal