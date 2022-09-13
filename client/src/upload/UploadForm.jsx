import React , {useState} from 'react'
import FormTable from './FormTable'
import PreviewModal from './PreviewModal'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const UploadForm = () => {
  const [samples , setSamples] = useState([])
  const [name , setName] = useState()
  const [description , setDescription] = useState()
  const [coverArt , setCoverArt] = useState()
  const [showModal, setshowModal] = useState(false);

  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);



  function handleSubmit(e) {
    e.preventDefault()
    return samples.length === 0 ? window.alert("No samples were uploaded") : null
  }

  function handleName(e) {
    setName(e.target.value)
  } 
  function handleDescription(e){
    setDescription(e.target.value)
  }
  function handleCoverArt(e) {
    setCoverArt(e.target.files[0])
  }
  
  return (
    <div className="mx-3">
      <PreviewModal name={name} samples={samples} description={description} coverArt={coverArt} showModal={showModal} handleClose={handleClose}/>
      <Row className="">
        <Col className=" pt-2 light-purple-bg rounded-3 mx-2">
          <Row className="mt-2">
            <Col className="col-auto">
              <h4 className="mb-3">Name</h4>
              <h4 className="my-4">Description</h4>
              <br/>
              <h4 className="mt-1">Artwork</h4>
              <h4 className="mt-3">Samples</h4>
              <Button onClick={handleShow} className="mt-3" variant="secondary">Preview</Button>
            </Col>
            <Col>
              <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-25">
                  <Form.Control value={name} onChange={handleName} type="text" placeholder="Enter collection name here..." required/>
                </Form.Group>
                <Form.Group className="mb-3 w-50">
                    <Form.Control value={description} onChange={handleDescription} className="text-break" as="textarea" placeholder="Describe your sample pack...." required/>
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3 w-25">
                  <Form.Control type="file" accept="image/*" size="sm" onChange={handleCoverArt} required/>
                </Form.Group>
                <Form.Group>
                  <FormTable samples={samples} setSamples={setSamples}/>
                </Form.Group>
                <Button variant="light" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

    
  )
}

export default UploadForm